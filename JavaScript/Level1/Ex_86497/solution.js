function solution(sizes) {
    var [w,h] = [1,1];
    sizes.forEach(e=>{
        e.sort((a,b)=>a-b);
        [w,h] = [w,h].map((v,i)=>v<e[i]? v=e[i]: v)
    })
    return w*h;
}