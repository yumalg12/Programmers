const solution = (i, j, k) => [...(Array(j-i+1).fill(0).map(_=>i++)).join('')].reduce((acc,e)=>e==k? acc+=1: acc, 0);

// Split을 쓸 수도 있었다.
// const solution = (i, j, k) => (Array(j-i+1).fill(0).map(_=>i++)).join('').split(k).length - 1;