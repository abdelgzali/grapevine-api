const mongoose = require("mongoose");
const { Schema } = mongoose;

const grapeSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
});
const Grape = mongoose.model("Grape", grapeSchema);

const messageSchema = new Schema({
  id: String,
  grape: String,
  content: String
});

const Message = mongoose.model("Message", messageSchema);

module.exports = { Grape, Message };
