const express = require('express');
var whoAmI_Router = express.Router();

whoAmI_Router.route('/')
.all(function (request, response) {
    var whoAmI = {
        "ip" : (request.headers['x-forwarded-for'] ||
                 request.connection.remoteAddress ||
                 request.socket.remoteAddress ||
                 request.connection.socket.remoteAddress).split(",")[0],
        "lang" : request.headers['accept-language'].split(',')[0],
        "sw" : request.headers['user-agent']
    }; 

    response.json(whoAmI);
});

module.exports = whoAmI_Router;
