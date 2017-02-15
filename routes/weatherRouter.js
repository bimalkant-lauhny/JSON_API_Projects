const express = require('express');
var router = express.Router();

router.route('/weather')
.all(function (request, response, next) {
    response.render('weather');
});

module.exports = router;
