function solution(array, n) {
    let answer = array.sort((a,b)=>a-b)[0];
    array.forEach(e=> {
        Math.abs(e-n) < Math.abs(answer-n)
            ?answer = e
            : ''
    })
    return answer;
}