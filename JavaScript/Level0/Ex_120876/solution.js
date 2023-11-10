function solution(lines) {
    let pos = [];
    lines.forEach(([start, end])=>{
      for(let i=start; i<end; i++) {
          pos.push(i);
      }  
    });
    
    let overlap = new Map();
    pos.forEach(e=>{
        overlap.has(e) ? overlap.set(e, overlap.get(e) + 1) : overlap.set(e, 0);
    })
    
    let answer = 0;
    for (let num of overlap.values()) {
        if (num > 0) answer++;
    }
    
    return answer;
}