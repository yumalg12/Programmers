function solution(s){
    if (s[0] === ')') return false;
    
    var answer = [];
    [...s].forEach(e => e==='('?answer.push('('): answer.pop());
    return !answer.length;
}

// stack 방식을 직접적으로 사용하지는 않지만 유사하게 동작하는 답안
//const solution = (s) => {
//	let answer = 0;
//    for (let e of [...s]) {
//        answer += (e==='('? 1: -1);
//        if (answer < 0) return false;
//    }
//	return answer === 0;
//}