function solution(n) {
    let answer = 0;
    let allN = Array(n+1).fill(true);
    allN[0] = allN[1] = false;
    
    for (let i=2; i<=Math.sqrt(n); i++) {
        if(allN[i]) {
            for (let j=i*i; j<=n; j+=i) {
                allN[j] = false;
            }
        }
    }
    
    for (let i = 2; i <= n; i++) {
        if (allN[i]) {
            answer++;
        }
    }
    
    return answer;
}

//에라토스테네스의 체를 구현해 보았다. 시간복잡도를 낮추는 것이 관건임을 느꼈다.