const express = require('express');
const router = express.Router();
const AdminController = require('../../controllers/AdminController');
const checkAuth = require('../../middlewares/checkAuth');

router.get('/allData', checkAuth , AdminController.getAllData)
router.delete('/allData', checkAuth , AdminController.removeAllData)




module.exports = router