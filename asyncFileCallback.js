const fs = require("fs");

console.log('\nProgram starting...');
const fileName = 'fileCallback.js';
console.log(`\nread ${fileName}...`);
const data1 = fs.readFile(fileName, (err, data) => {
    console.log('-----------------------------');
    console.log('read data:', );
    console.log(data.toString());    
});
const fileName2 = 'callback.js';
console.log(`\nread ${fileName2}...`);
const data2 = fs.readFile(fileName2, (err, data) => {
    console.log('-----------------------------');
    console.log('read data:', );
    console.log(data.toString());
});   
console.log('\nProgram Ended');
