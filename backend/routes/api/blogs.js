const express = require('express')
const router = express.Router();
const { Blog } = require('../../db/models');
const asyncHandler = require('express-async-handler');



router.post(
    '/',
    asyncHandler( async(req, res) => {
        const { name, userId } = req.body
        const blog = await Blog.create({name, userId})
        return res.json({
        blog,
        })
    })
)



router.get(
    `/:name`,
    asyncHandler(async(req, res) => {
        const blog_name = req.params.name;
        const blog = await Blog.findByPk(blog_name, {})
        console.log(blog)
    })

)

module.exports = router
