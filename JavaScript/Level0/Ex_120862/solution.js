function solution(numbers) {
    let [a,b] = numbers.sort((a,b)=>a-b);
    let [c,d] = numbers.sort((a,b)=>b-a);
    return Math.max(a*b, c*d);
}