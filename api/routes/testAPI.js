var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send('Functioning properly');
});

module.exports = router;