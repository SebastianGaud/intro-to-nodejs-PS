"use strict";
exports.__esModule = true;
var resources_1 = require("./resources");
var r = new resources_1.Resources(5);
r.on('start', function (d) {
    console.log('[Start]', d);
});
r.on('data', function (d) {
    console.log('[Data]', d);
});
r.on('end', function (d) {
    console.log('[End]', d);
});
