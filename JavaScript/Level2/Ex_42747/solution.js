function solution(citations) {
    for (let i = Math.min(citations.length, Math.max(...citations)); i >= 0; i--) {
        if (citations.reduce((acc,e)=>e>=i?acc+=1:acc, 0) >= i) return i;        
    }
}