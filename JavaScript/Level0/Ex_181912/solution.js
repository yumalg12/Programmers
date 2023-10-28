function solution(intStrs, k, s, l) {
    var answer = [];
    intStrs.map((e) => {
    let num = +(e.slice(s,l));
    num > k? answer.push(num):''})
    return answer;
}