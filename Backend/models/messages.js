const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  name: { required: true, type: String },
  email: { required: true, type: String },
  message: { required: true, type: String },

  lastName: { required: true, type: String },
  phone: { required: true, type: String },
  order: { required: true, type: String },
});

const MessageModel = mongoose.model("message", messageSchema);

module.exports = { MessageModel };
