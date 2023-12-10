function solution(d, budget) {
    var answer = 0;
    d.sort((a,b)=>a-b).forEach(e=>{
        if (budget-e >= 0) {answer++; budget-=e}
        else return answer;
    })
    return answer;
}