const express = require('express');
const router = express.Router();

const cardCtrl = require('../controllers/card');

router.post('/', cardCtrl.storeCardDetail);

module.exports = router;