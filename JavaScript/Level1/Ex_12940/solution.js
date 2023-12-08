function solution(n, m) {
    const euclid = (a,b) => {
        if (a%b === 0) return b;
        return euclid(b,a%b)
    }
    
    return [euclid(n,m), n*m/euclid(n,m)];
}

//유클리드 호제법에 대해 공부했다.