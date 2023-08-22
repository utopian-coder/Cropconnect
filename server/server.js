const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: ".env" });

const app = require("./app");

const DB = process.env.DB.replace("<password>", process.env.PASSWORD);
mongoose.connect(DB).then(() => {
  console.log("DB connected successfully!");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listeing at PORT ${process.env.PORT}`);
});
