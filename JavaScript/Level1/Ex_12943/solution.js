function solution(num) {
    let answer = 0;
    
    const f = (n) => {
        if (n === 1) {
            return answer;
        } else if (answer >= 500) {
            return -1;  
        } else {
            answer++;
            if (n%2 === 0) {
                return f(n/2)
            }
            return f(3*n+1)
        }
    }
    
    
    return f(num);
}