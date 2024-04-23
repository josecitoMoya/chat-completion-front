import mongoose from "mongoose";

const Message = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  sender: {
    type: String,
    enum: ["user", "bot"],
    default: "bot",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const MessageModel = mongoose.model("Message", Message);

export default MessageModel;
