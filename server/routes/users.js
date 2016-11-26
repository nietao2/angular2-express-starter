"use strict";
var express = require('express');
exports.router = express.Router();
/* GET users listing. */
exports.router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
//# sourceMappingURL=users.js.map