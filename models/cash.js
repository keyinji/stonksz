import { Schema, model, models } from "mongoose";

const Cash = new Schema({
  id: {
    type: String,
    required: true,
  },
  cash: {
    type: Number,
    required: true,
  },
});

module.exports = models.cash || model("cash", Cash);


