const mongoose = require('mongoose')


const postSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: { type: String },
  text: { type: String },
  title: { type: String },
  currentUser: { type: String },
}, { timestamps: true })

module.exports = mongoose.model("Post", postSchema)
