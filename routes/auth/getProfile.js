const router = require("express").Router()
const User = require("../../models/user")

router.post("/profile", async (req, res) => {
  const { email } = req.body

  try {
    let user = await User.findOne({ email })
    if (user) {
      return res.status(200).json({
        message: "Profile found",
        user,
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