function solution(s) {
    let answer = [];
    let wordPos = {};

    [...s].map((v,i)=>{
        if (i === s.indexOf(v)) -1;
        else i - wordPos[v];
        wordPos[v] = i;
    })
    
    return answer;
}