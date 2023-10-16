function solution(arr) {
  let stk = arr.reduce(
      (acc, e)=>(!acc.length?[e]:acc[acc.length-1]===e?acc.slice(0,-1):[...acc, e])
      ,[])
  return stk.length? stk: [-1];
}