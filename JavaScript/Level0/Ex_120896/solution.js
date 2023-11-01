function solution(s) {
    var answer = [];
    let sArr = [...s];
    while (sArr.length > 0) {
        let sLast = sArr.pop();
        sArr.indexOf(sLast) === -1? answer.push(sLast): sArr = sArr.filter(e=>e!=sLast);
    }
    return answer.sort().join('');
}