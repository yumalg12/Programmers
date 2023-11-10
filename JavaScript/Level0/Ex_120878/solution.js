function solution(a, b) {
    for (let i=1; i <= Math.min(a,b); i++) {
        if (a%i === 0 && b%i === 0) { a/=i; b/=i; }
    }
    
    while(1 < b) {
        if (b%2 === 0) { b/=2; }
        else if (b%5 === 0) { b/=5; }
        else { return 2 }
    }
    
    return b;
}

//평범하게 풀었는데, 케이스에 따라서는 이 방식이 더 효율적일 것 같다.
//const solution = (a, b) => Number((a/b).toFixed(10)) == a/b ? 1 : 2
