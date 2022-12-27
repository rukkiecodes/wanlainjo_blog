const router = require("express").Router()
const User = require("../../models/user")

router.post("/updateProfile", async (req, res) => {
    const {
        email,
        name
    } = req.body

    try {
        let user = await User.updateOne({ email }, {
            $set: { name }
        })
        return res.status(200).json({
            message: "User found",
            success: true,
            user
        })
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Auth failed",
            error,
        })
    }
})

module.exports = router
