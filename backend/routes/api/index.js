const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const { restoreUser } = require('../../utils/auth.js');
const { requireAuth } = require('../../utils/auth.js');

const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const postRouter = require('./posts')

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/posts', postRouter)

module.exports = router;
