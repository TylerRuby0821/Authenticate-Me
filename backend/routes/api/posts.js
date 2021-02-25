const express = require('express')
const asyncHandler = require('express-async-handler');

const { Post } = require('../../db/models')
const { restoreUser} = require('../../utils/auth')

const router = express.Router();


router.post(
    '/',
    restoreUser,
    asyncHandler(async (req, res) => {
        const {title, content, type} = req.body;
        const userId = req.user.id
        const post = await Post.create({ title, content, userId, type})

        return res.json({
            post,
        })
    })
)
module.exports = router;
