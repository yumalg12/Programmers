function solution(board) {
    let n = board.length;
        
    let hasZero = false;
    
    const removeWarn = (i,j) => {
        for (let k = Math.max(i-1,0); k<=Math.min(i+1,n-1); k++){
            for(let l = Math.max(j-1,0); l<=Math.min(j+1,n-1); l++) {
                if (board[k][l] === 0) board[k][l] = null;
            }
        }
        board[i][j] = null;
    }
    
    for (let i=0; i<n; i++){
        for (let j=0; j<n; j++) {
            if (board[i][j] === 0) {
                hasZero = true;
            } else if (board[i][j] === 1) {
                removeWarn(i,j);
            }
        }
    }
    
    if (!hasZero) return 0;
    
    let count = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 0) {
                count++;
            }
        }
    }
    
    return count;
}

// 런타임 에러를 해결하는 것이 힘들었다.