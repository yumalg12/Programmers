function solution (arr) {
  let b = [];
  let i = 0;
  while (JSON.stringify(b) != JSON.stringify(arr)){
      b = [...arr];
      arr = arr.map((e)=>(e>=50 && e%2 === 0)? e/2: (e<50 && e%2 != 0)? e*2+1: e);
      i++;
  }
  return i-1;
}