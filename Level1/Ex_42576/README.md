//효율성 시간초과..
function solution(participant, completion) {
    const union = participant.concat(completion);
    return Array.from(new Set (union.filter(e=>union.filter(v=>v===e).length % 2 === 1))).join('')
}

//효율성 시간초과..
function solution(participant, completion) {
    let resArr = [];
    
    completion.sort(); participant.sort();
    
    for (let c of completion) {
        resArr.push(c);
    }

    for (let p of participant) {
        if (resArr.indexOf(p) === -1) {
            return p;
        } else {
            resArr = resArr.slice(resArr.indexOf(p)+1);
        }
    }
    
    return resArr[0]
}


//질문하기 참고
function solution(participant, completion) {
    participant.sort(); completion.sort();

    completion.push("");

    for(let i = 0; i < participant.length; i++) {
        if(participant[i] !== completion[i]) {
            return participant[i];
        }
    }
}