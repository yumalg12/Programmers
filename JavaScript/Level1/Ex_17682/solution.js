function solution(dartResult) {
    var answer = [];
    const res = [...dartResult.replaceAll('10', 'a')].map(e => (e === 'a' ? 10 : e));
    
    for (let i = 0; i < res.length; i++) {
        switch (res[i]) {
            case 'S': answer.push(+res[i-1]); break;
            case 'D': answer.push(Math.pow(+res[i-1], 2)); break;
            case 'T': answer.push(Math.pow(+res[i-1], 3)); break;
            case '*': 
                answer[answer.length-1] *= 2;
                if (answer.length > 1) answer[answer.length-2] *= 2;
                break;
            case '#': answer[answer.length-1] *= -1; break;
        }
    }
    
    return answer.reduce((acc, e) => acc+(e || 0), 0);
}