const router = require("express").Router()
const mongoose = require("mongoose")

const Post = require("../../models/post")
const User = require("../../models/user")

router.post("/addPost", async (req, res) => {
    const { email, text } = req.body

    try {
        let currentUser = await User.findOne({ email })

        // Upload image to cloudinary
        let _user
        _user = await Post.create({
            _id: new mongoose.Types.ObjectId(),
            email,
            text,
            currentUser: JSON.stringify(currentUser),
        })

        res.status(200).json({
            message: "Avatar updated",
            success: true,
            _user
        })
    } catch (err) {
        console.log(err)
    }
})

module.exports = router