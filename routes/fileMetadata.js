const express = require('express');
const path = require('path');

const fs = require('fs');
const assert = require('assert');

const multer = require('multer');
var upload = multer({dest: '../uploads/'});

var filemetadataRouter = express.Router();

filemetadataRouter.route('/')
.get(function (request, response) {
    response.render('filemetadata');
});

filemetadataRouter.route('/get-size')
.post(upload.single('file'), function (request, response, next) {
    response.json({
        'size': request.file.size
    });
        
    fs.unlink('../uploads/' + request.file.filename, function (err, result) {
        assert.equal(null, err);
    });
});

module.exports = filemetadataRouter;
