import { Resources } from "./resources";

const r = new Resources(5);

r.on('start', (d: number) =>{
    console.log('[Start]', d);
});

r.on('data', (d: number) =>{
    console.log('[Data]', d);
});

r.on('end', (d: number) =>{
    console.log('[End]', d);
});
