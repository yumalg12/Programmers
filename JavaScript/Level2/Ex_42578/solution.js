function solution(clothes) {
    let hashMap = new Map();
    clothes.forEach(e=>{
        [_,type] = e;
        hashMap.set(type, (hashMap.get(type) || 1) + 1);
    });
    return Array.from(hashMap.values()).reduce((acc,e)=>acc*e, 1) - 1;
}