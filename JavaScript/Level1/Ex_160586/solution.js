function solution(keymap, targets) {
    let keynum = {};
    keymap.forEach(e=>{
        [...e].forEach((v,i)=>{
            keynum[v] = Math.min(keynum[v] || e.length, i+1);
        })
    });
    return targets.map(target=> [...target].reduce((acc,e)=>acc += (keynum[e] || undefined), 0) || -1);
}