function solution(n, lost, reserve) {
    let map = new Map();
    let resSet = new Set(reserve);
    let lostSet = new Set(lost);
    
    for (let i=1; i<=n; i++) {
        if (resSet.has(i) && !lostSet.has(i)) map.set(i,2);
        else if (!resSet.has(i) && lostSet.has(i)) map.set(i,0);
        else map.set(i,1)
    }
            
    for (let i=1; i<=n; i++) {
        if (map.get(i) === 0) {
            if (map.get(i-1) === 2) {
                map.set(i,map.get(i)+1);
                map.set(i-1,map.get(i-1)-1);
            } else if (map.get(i+1) === 2) {
                map.set(i,map.get(i)+1);
                map.set(i+1,map.get(i+1)-1);
            }
        }
    }
        
    return [...map.values()].reduce((acc,e)=>e>0?acc+=1:acc,0);
}