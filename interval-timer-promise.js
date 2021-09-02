let interval = setInterval(() => { console.log('( )'); clearInterval(interval)});

setImmediate(() => console.log('( )'));

setTimeout(() => console.log('( )'));

process.nextTick(() => console.log('( )'));

console.log('( )');

let myPromise = () => new Promise((resolve) => setTimeout(() => { console.log('( )'); resolve()}));
let myPromise2 = () => new Promise((resolve) => { console.log('( )'); resolve()} );


myPromise().then(console.log('( )'));
myPromise2().then(console.log('( )'));
