const fs = require("fs");

console.log('\nProgram starting...');

const fileName = 'fileCallback.js';
console.log(`\nread ${fileName}...`);
const data1 = fs.readFileSync(fileName);
console.log('read data:', );
console.log(data1.toString());
console.log('-----------------------------');

const fileName2 = 'callback.js';
console.log(`\nread ${fileName2}...`);
const data2 = fs.readFileSync(fileName2);   
console.log('read data:', );
console.log(data2.toString());

console.log('\nProgram Ended');
 