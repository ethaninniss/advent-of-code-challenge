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
            count += checkGame(line);
        });

        readStream.on('close', () => {
            resolve(count);
        });

        readStream.on('error', (err) => {
            reject(err);
        });
    });
}

function checkGame(s) {
    // Part 1
    // let [index, game] = s.split(':');
    // const cubes = { 'red': 12, 'green': 13, 'blue': 14 };
    // index = Number(index.split(' ')[1]);
    // game = game.split(';');
    // for (let seq of game) {
    //     seq = seq.trim().replaceAll(',', '').split(' ');
    //     for (let i = 0; i < seq.length; i += 2) {
    //         if (cubes[seq[i + 1]] < Number(seq[i])){
    //             console.log(index)
    //             return 0;
    //         } 
    //     }
    // }
    // return index;

    // Part 2
    let [index, game] = s.split(':');
    const max = { 'red': 0, 'green': 0, 'blue': 0 };
    index = Number(index.split(' ')[1]);
    game = game.split(';');
    for (let seq of game) {
        seq = seq.trim().replaceAll(',', '').split(' ');
        for (let i = 0; i < seq.length; i += 2) {
            max[seq[i + 1]] = Math.max(max[seq[i + 1]], seq[i]);
        }
    }
    return max.red * max.green * max.blue;
}

solution()
    .then((count) => {
        console.log(count);
    })
    .catch((err) => {
        console.error(err);
    });
