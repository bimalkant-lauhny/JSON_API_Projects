const express = require('express');
var router = express.Router();

router.route('/drumkit')
.all(function (res, req, next) {
    res.render('drumKit');
});

module.exports = router;
