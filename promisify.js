const fs = require("fs");
const util = require('util');
console.log('\nProgram starting...');

const fileNames = [
    'fileCallback.js',
    'callback.js'
];

const readFile = util.promisify(fs.readFile);

async function main() {
    const results = await Promise.all([readFile(fileNames[0]), readFile(fileNames[1])]);
    console.log(results);
}

main().then();

console.log('\nProgram Ended');
