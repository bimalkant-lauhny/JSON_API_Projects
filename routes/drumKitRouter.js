const express = require('express');
var router = express.Router();

router.route('/drumkit')
.all(function (request, response, next) {
    response.render('drumKit');
});

module.exports = router;
