function solution(arr, divisor) {
    let answer = arr.filter((e) => e % divisor === 0).sort((a, b) => a - b);
    return answer.length ? answer : [-1];
}
