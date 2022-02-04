const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

let userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: String,
  name: {
    type: String,
    required: true,
  },

  activated: {
    type: Boolean,
  },

  schoolPhoneNumber: {
    type: Number,
  },
  confirmation: {
    type: String,
    default: "Waiting for confirmation",
  },
  confirm: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Confirm",
    },
    id: String,
  },
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);
