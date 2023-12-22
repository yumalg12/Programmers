function solution(lottos, win_nums) {
    let rank = [6,6,5,4,3,2,1];
    let winSet = new Set(win_nums);
    let nZero = nWin = 0;
    
    for (let i of lottos) {
        i === 0? nZero++: winSet.has(i)? nWin++: '';
    }
    
    return [rank[nWin+nZero], rank[nWin]];
}