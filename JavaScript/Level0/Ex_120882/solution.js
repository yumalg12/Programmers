function solution(score) {
    var answer = [];
    let sumArr = score.map(e=>e[0]+e[1]).sort((a,b)=>b-a);
    score.forEach(e=>answer.push(sumArr.indexOf(e[0]+e[1])+1));
    return answer;
}