function solution(n) {
    if (Math.sqrt(n) === ~~Math.sqrt(n)) {
        return Math.pow(Math.sqrt(n)+1,2)
    }
    return -1;
}