"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var events_1 = require("events");
var Resources = /** @class */ (function (_super) {
    __extends(Resources, _super);
    function Resources(m) {
        var _this = _super.call(this) || this;
        _this._maxEvent = m;
        _this._self = _this;
        process.nextTick(function () {
            var count = 0;
            _this._self.emit('start');
            var t = setInterval(function () {
                _this._self.emit('data', ++count);
                if (count == _this._maxEvent) {
                    _this._self.emit('end', count);
                    clearInterval(t);
                }
            });
        });
        return _this;
    }
    return Resources;
}(events_1.EventEmitter));
exports.Resources = Resources;
// function getResources(m:number) {
//     let e = new EventEmitter();
//     process.nextTick(() => {
//         let count = 0;
//         e.emit('start');
//         let t = setInterval(() => {
//             e.emit('data', ++count);
//             if (count === m) {
//                 e.emit('end', count);
//                 clearInterval(t);
//             }
//         });
//     });
//     return(e);
// }
// let r = getResources(5);
// r.on('start', (d: number) =>{
//     console.log('[Start]', d);
// });
// r.on('data', (d: number) =>{
//     console.log('[Data]', d);
// });
// r.on('end', (d: number) =>{
//     console.log('[End]', d);
// });
