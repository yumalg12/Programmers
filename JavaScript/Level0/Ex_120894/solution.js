function solution(numbers) {
    let nObj = {"zero":0, "one":1, "two":2, "three":3, "four":4, "five":5, "six":6, "seven":7, "eight":8, "nine":9};
    Array.from(Object.keys(nObj)).forEach(e=>numbers=numbers.replaceAll(e, nObj[e]));
    return +numbers;
}