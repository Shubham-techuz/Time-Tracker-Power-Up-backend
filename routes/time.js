const express = require('express');
const router = express.Router();


const timeCtrl = require('../controllers/time');

router.post('/timestamp', timeCtrl.storeTimeDetail);
router.get('/timestamp/:id', timeCtrl.getOneTime);
router.put('/timestamp/:id', timeCtrl.modifyTime);

module.exports = router;