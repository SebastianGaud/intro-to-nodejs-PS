import { EventEmitter } from "events";

export class Resources extends EventEmitter{

    private _maxEvent: number;
    private _self: EventEmitter;

    constructor(m: number) {
        super();
        this._maxEvent = m;
        this._self = this;

        process.nextTick(() => {
            let count = 0;
            this._self.emit('start');

            let t = setInterval(() => {
                this._self.emit('data', ++count);
                if (count == this._maxEvent) {
                    this._self.emit('end', count);
                    clearInterval(t);
                }
            });
        });
    }

}


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
