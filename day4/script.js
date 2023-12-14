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
            count += checkCard(line);
        });

        readStream.on('close', () => {
            resolve(count);
        });

        readStream.on('error', (err) => {
            reject(err);
        });
    });
}

function checkCard(s) {
    // Part 1
    let [win, nums] = s.split('|');
    win = win.split(':')[1].trim().split(' ');
    nums = nums.slice(1).split(' ');
    let count = 0;
    const winning = new Set(win);
    for (let num of nums) {
        if (!num) continue;
        if (winning.has(num)) count++;
    }
    return count ? 2 ** (count - 1) : 0;

    // Part 2
    
}

solution()
    .then((count) => {
        console.log(count);
    })
    .catch((err) => {
        console.error(err);
    });
