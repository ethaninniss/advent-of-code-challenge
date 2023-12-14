function solution(time, distance) {
    let res = 1;
    for (let i = 0; i < time.length; i++) {
        // res *= findWins(time[i], distance[i]);
        const sum = findWins(time[i], distance[i]);
        if (sum) res *= sum
    }
    return res === 1 ? 0 : res;
}

function findWins(time, distance) {
    let count = 0;
    for (let i = 0; i <= time; i++) {
        const newDistance = i * (time - i);
        if (newDistance > distance) count++;
    }
    return count;
}

console.log(solution([7, 15, 30], [9, 40, 200]))

console.log(solution([42, 8, 91, 89], [308, 1170, 1291, 1467]))