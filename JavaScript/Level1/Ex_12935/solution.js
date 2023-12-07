function solution(arr) {
    let min = Math.min(...arr);
    let answer = arr.filter(e=>e!=min)
    return answer.length? answer: [-1];
}