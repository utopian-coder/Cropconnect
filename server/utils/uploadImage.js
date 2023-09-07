const fs = require("fs/promises");
const multer = require("multer");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

//It saves files in /tmp and makes them accesible from req.files
exports.uploadMiddleware = multer({ dest: "/tmp" }).array("photos", 5);

const s3Bucket = "cropconnect";

exports.uploadToS3 = (originalFileName, path, mimetype) => {
  return new Promise(async (resolve, reject) => {
    try {
      const client = new S3Client({
        region: "eu-north-1",
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
        },
      });

      const partsOfPhoto = originalFileName.split(".");
      const extension = partsOfPhoto.at(-1);
      const newFileName = `${Date.now()}.${extension}`;

      const photo = await fs.readFile(path);

      const inputToS3 = {
        Bucket: s3Bucket,
        Body: photo,
        Key: newFileName,
        ContentType: mimetype,
        ACL: "public-read",
      };

      const command = new PutObjectCommand(inputToS3);
      await client.send(command);

      const photoURL = `https://${s3Bucket}.s3.amazonaws.com/${newFileName}`;
      resolve(photoURL);
    } catch (error) {
      reject(error);
    }
  });
};
