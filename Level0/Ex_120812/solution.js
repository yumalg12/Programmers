const solution = (arr) => {
    let count = new Object();
    let ns = Array.from(new Set(arr));
    ns.forEach(e => count[e] = 0);
    arr.forEach(e => count[e] += 1);
    let max = ns.filter(v=>count[v]===Math.max(...(ns.map(e=>count[e]))));
    return max.length === 1? max[0]: -1;
}
