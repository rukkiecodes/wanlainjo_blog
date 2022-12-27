const mongoose = require('mongoose')


const postSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: { type: String, required: true },
  photoURL: { type: String},
  text: { type: String},
  text: { type: String},
  currentUser: { type: String},
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
}, { timestamps: true })

module.exports = mongoose.model("Post", postSchema)