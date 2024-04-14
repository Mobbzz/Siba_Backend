const express = require("express");
const { MessageModel } = require("../models/messages");

const messageRouter = express.Router();

messageRouter.post("/messages", async (req, res) => {
  try {
    await MessageModel(req.body).save();
    res.status(200).json({ message: "Message late successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});




messageRouter.delete("/messages/:id", async (req, res) => {
  const {id}=req.params
  try {
    await MessageModel.findByIdAndDelete(id)
    res.status(200).json({ message: "Message deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


module.exports = { messageRouter };
