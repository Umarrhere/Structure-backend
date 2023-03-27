const express = require('express');
const router = express.Router();
const AdminRouter = require('./AdminRouter')
const UserRouter = require('./UserRouter')

router.use('/admin', AdminRouter)
router.use('/users', UserRouter)


module.exports = router;
