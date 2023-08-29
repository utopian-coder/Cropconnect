const bcrypt = require("bcrypt");
const validator = require("validator");
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide your name."],
  },

  email: {
    type: String,
    required: [true, "Please provide an email id."],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email."],
  },

  password: {
    type: String,
    required: [true, "Please enter a strong password."],
    minlength: 6,
    select: false,
  },

  passwordConfirm: {
    type: String,
    required: [true, "Please confirm the password."],
    validate: {
      validator: function (curr) {
        return curr === this.password;
      },
      message: "Passwords aren't the same",
    },
  },

  passwordChangedAt: Date,

  role: {
    type: String,
    enum: ["buyer", "seller"],
    default: "buyer",
  },

  location: {
    type: String,
    required: [true, "Please provide your address."],
  },

  photo: String,
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 11);
  this.passwordConfirm = undefined;
});

userSchema.methods.checkPasswordCorrectness = async function (
  inputPassword,
  storedPassword
) {
  return await bcrypt.compare(inputPassword, storedPassword);
};

userSchema.methods.isPasswordChangedAfterSigningJWT = function (jwtTimestamp) {
  if (this.passwordChangedAt) {
    const convertedTimestamp = this.passwordChangedAt.getTime() / 1000;
    console.log(convertedTimestamp, jwtTimestamp);
    return convertedTimestamp > jwtTimestamp; //Password was changed after signing JWT
  }

  return false;
};

const User = model("User", userSchema);
module.exports = User;
