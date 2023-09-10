function solution(a, b) {
    var ab = +(`${a}${b}`);
    var ba = +(`${b}${a}`);
    return Math.max(ab,ba);
}