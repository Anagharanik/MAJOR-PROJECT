const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  comment: { type: String, maxlength: 150 },
  rating: { type: Number, min: 1, max: 5 },
  created_on: { type: Date, default: Date.now() },
  author: { type: Schema.Types.ObjectId, ref: "User" },
});
module.exports = mongoose.model("Review", reviewSchema);
