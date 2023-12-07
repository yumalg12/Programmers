function solution(arr, divisor) {
    var answer = [];
    for (let n of arr) {
        if (n%divisor===0) answer.push(n);
    }
    answer.sort((a,b)=>a-b);
    return answer.length? answer: -1;
}