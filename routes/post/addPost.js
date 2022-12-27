const router = require("express").Router()
const cloudinary = require("../../middleware/cloud")
const upload = require("../../middleware/multer")
const mongoose = require("mongoose")

const Post = require("../../models/post")
const User = require("../../models/user")

router.post("/addPost", upload.single("post"), async (req, res) => {
    const { email, text, user } = req.body

    try {
        let currentUser = await User.findOne({ email })

        // Upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: process.env.CLOUDINARY_FOLDER,
        })

        let _user
        _user = await Post.create({
            _id: new mongoose.Types.ObjectId(),
            email,
            text,
            user,
            photoURL: result.secure_url,
            currentUser: JSON.stringify(currentUser),
        })

        res.status(200).json({
            message: "Avatar updated",
            success: true,
            _user,
            result,
        })
    } catch (err) {
        console.log(err)
    }
})

module.exports = router