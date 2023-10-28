function solution(n) {
    var answer = 0;
    for (let i = 1; i <= n; i++){
        let nDiv = 0;
        for (let j = 1; j <= i; j++){
            if (i%j === 0) nDiv++;
            if (nDiv === 3) {
                answer++;
                break;
            }
        }
    }
    return answer;
}