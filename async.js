const fs = require("fs");
const util = require('util');

console.log('\nProgram starting...');

const fileNames = [
    'fileCallback.js',
    'callback.js'
];

const readFile = util.promisify(fs.readFile);

async function main() {
    try {
        const result1 = await readFile(fileNames[0]);
        console.log(result1);
        const result2 = await readFile(fileNames[1]);
        console.log(result2);
    } catch (error) {
        console.log(error);
    }
    throw new Error('Some error');
}

main().then(() => console.log('then')).catch(() => console.log('reject')).finally(() => console.log('finally'));

console.log('\nProgram Ended');
