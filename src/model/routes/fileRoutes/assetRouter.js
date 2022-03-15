const srcLocation = require('../../../srcLocation');
const path = require('path');

const express = require('express');
const router = express.Router();

router.get('/sm', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/assets/SM.jpg'))
});

module.exports = router;