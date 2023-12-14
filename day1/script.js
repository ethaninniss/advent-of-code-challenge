const fs = require('fs');
const readline = require('readline');

const filePath = './input.txt';

function solution() {
    return new Promise((resolve, reject) => {
        const readStream = readline.createInterface({
            input: fs.createReadStream(filePath),
            output: process.stdout,
            terminal: false
        });

        let count = 0;

        readStream.on('line', (line) => {
            line = line.trim();
            count += findCount(line);
        });

        readStream.on('close', () => {
            resolve(count);
        });

        readStream.on('error', (err) => {
            reject(err);
        });
    });
}

function findCount(s) {
    // Part 1
    // const numbers = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9']);
    // let l = 0, r = s.length - 1;
    // while (l <= r) {
    //     if (numbers.has(s[l]) && numbers.has(s[r])) return Number(s[l] + s[r]);
    //     if (!numbers.has(s[l])) l++;
    //     if (!numbers.has(s[r])) r--;
    // }
    // return 0;

    // Part 2
    const numbers = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9']);
    let l = 0, r = s.length - 1;
    while (l <= r) {
        
    }
    return 0;
}

solution()
    .then((count) => {
        console.log(count);
    })
    .catch((err) => {
        console.error(err);
    });
