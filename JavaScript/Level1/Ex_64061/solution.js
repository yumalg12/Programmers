function solution(board, moves) {
    let answer = 0;
    let basket = [0];
    
    const crane = (n,m) => {
        if (n >= board.length) return;
        if (board[n][m-1] === 0) crane(n+1,m);
        else {
            let last = basket.pop();
            let current = board[n][m-1];
            board[n][m-1] = 0;
            
            if (last === current) answer++;
            else {
                basket.push(last);
                basket.push(current);
            }
        }
    }
    
    moves.forEach(e=> crane(0,e));
    
    return 2*answer;
}