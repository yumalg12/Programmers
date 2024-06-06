function solution(maps) {
    const [n, m] = [maps.length, maps[0].length]
    const directions = [[1,0], [0,1], [-1,0], [0,-1]];
    const visited = new Set(['0,0']);
    const queue = [[0,0,1]];
    
    while (queue.length) {
        const [y, x, dist] = queue.pop();
        if (y===n-1 && x===m-1) return dist;

        for (const [dy, dx] of directions) {
            const ny = y + dy;
            const nx = x + dx;

            if (ny>=0 && ny<n && nx>=0 && nx<m && maps[ny][nx] === 1 && !visited.has(`${ny},${nx}`)) {
                queue.unshift([ny,nx,dist+1]);
                visited.add(`${ny},${nx}`);
            }
        }
    }
    return -1;
}