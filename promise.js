const fs = require("fs");
console.log('\nProgram starting...');

const fileNames = [
    'fileCallback.js',
    'callback.js'
];

async function readFile(fileName) {
    console.log(`\npromise executor started(${fileName})`);
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if (err) {
                return reject(err);
            };
            console.log('read data:', );
            console.log(data.toString());   
            resolve(data);
        });        
    })
}

async function main() {
    for (const fileName of fileNames) {
        await readFile(fileName);
    }
}

main().then();

console.log('\nProgram Ended');
