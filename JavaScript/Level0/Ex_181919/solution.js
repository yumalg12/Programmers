function solution(n, arr = []) {
    arr.push(n)
    return n === 1 ? arr 
    : (n % 2 === 0 ? solution(n / 2, arr) 
    : solution(3 * n + 1, arr));
};