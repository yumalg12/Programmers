function solution(arr, flag) {
  return arr.reduce(
      (acc, e, i) => flag[i]? [...acc, ...new Array(e*2).fill(e)] : acc.slice(0,-e)
      ,[]
  );
}