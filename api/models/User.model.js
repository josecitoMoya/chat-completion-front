import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const User = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Enter an email"],
    unique: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  password: {
    type: String,
    required: [true, "Enter a password"],
    validate: [
      (data) => {
        validator.isStrongPassword(data, {
          minLength: 8,
          minUppercase: 1,
          minSymbol: 0,
          minNumbers: 0,
          returnScore: false,
        });
      },
      "The password must have 8 characters and 1 capital letter",
    ],
  },
  salt: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
});

User.pre("save", function (next) {
  if (this.isModified("password")) {
    return next();
  }
  if (typeof this.password !== "string") {
    return next(new Error("Password is missing or not a string"));
  }

  const salt = bcrypt.genSalt();
  this.salt = salt;
  bcrypt
    .hash(this.password, this.salt)
    .then((hash) => {
      this.password = hash;
      next();
    })
    .catch((err) => next(err));
});

User.methods.validatePassword = async function (password) {
  const hash = await bcrypt.hash(password, this.salt);

  const checking = hash === this.password;
  return checking;
};

const UserModel = mongoose.model("User", User);

export default UserModel;