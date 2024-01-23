function solution(s) {
    let answer = 0;
    
    const rep = (e) => {
        let [a, b] = [0, 0];
        let str = '';

        for (let i=0; i<e.length; i++) {
            e[i] === e[0] ? a++ : b++;
            str += e[i];
            
            if (a === b) {
                answer++;
                rep(e.slice(i+1));
                break;
            }
            
            if (i === e.length - 1) answer += e.length > 0;
        }
    }

    rep(s);

    return answer;
}