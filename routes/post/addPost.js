const router = require("express").Router()
const mongoose = require("mongoose")

const Post = require("../../models/post")
const User = require("../../models/user")

router.post("/addPost", async (req, res) => {
    const { email, text, title } = req.body

    try {
        let currentUser = await User.findOne({ email })

        let post
        post = await Post.create({
            _id: new mongoose.Types.ObjectId(),
            email,
            text,
            title,
            currentUser: JSON.stringify(currentUser),
        })

        res.status(200).json({
            message: "Post added",
            success: true,
            post
        })
    } catch (err) {
        res.status(400).json({
            message: "Failed to add post",
            success: false
        })
    }
})

module.exports = router
