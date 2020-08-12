const mongoose = require("mongoose");

const User = mongoose.model("User", {
  email: String,
  password: String,
  data: Object,
});

const AdminUser = mongoose.model("AdminUser", {
  email: String,
  password: String,
});

module.exports = {
  User,
  AdminUser,
};
