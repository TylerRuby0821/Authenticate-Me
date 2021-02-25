const express = require('express')
const asyncHandler = require('express-async-handler');

const { Post } = require('../../db/models')

const router = express.Router();


router.post(
    '/',
    asyncHandler(async (req, res) => {
        const {title, text, userId, blogId} = req.body;

        const post = await Post.create({ title, text, userId, blogId})

        return res.json({
            post,
        })
    })
)
module.exports = router;
