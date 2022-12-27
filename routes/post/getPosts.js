const router = require("express").Router()
const Post = require("../../models/post")

router.post("/getPosts", async (req, res) => {
  const { user } = req.body

  try {
    let posts = await Post.find({ user })
    if (posts) {
      return res.status(200).json({
        message: "Profile found",
        posts,
      })
    } else {
      return res.status(401).json({
        message: "Auth failed",
      })
    }
  } catch (error) {
    return res.status(401).json({
      message: "Auth failed",
    })
  }
})

module.exports = router