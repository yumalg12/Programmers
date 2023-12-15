function solution(N, stages) {
    let map = new Map() 
    for(let i=1; i<=N; i++) {
        let [a,b] = [0,0];
        stages.forEach(e=>{
            if (e>i) { b++ }
            else if (e===i) { a++; b++; }
        })
        map.set(i,a/b)
    }
    return [...map.keys()].sort((a,b)=>map.get(b)-map.get(a));
}