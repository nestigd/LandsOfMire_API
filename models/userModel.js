const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// static method: signup(hash passwords before saving new user)
// remember to use regular function for proper "this" behavior
userSchema.statics.signup = async function (email, password) {
  //validation
  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Not a valid email address");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error(
      "The password must contain at least: 8 characters, 1 lower case, 1 upper case, 1 number, 1 letter and 1 special character"
    );
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = await this.create({ email, password: hash });

  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("email not valid");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("password not valid");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
