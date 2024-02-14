const solution = (n) => {
    const oneNum = (num) => num.toString(2).match(/1/g).length;
    const initOneNum = oneNum(n);
    
    while (oneNum(++n) !== initOneNum);

    return n;
}