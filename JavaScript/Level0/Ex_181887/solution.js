function solution(num_list) {
  let a = b = 0;
  num_list.forEach((e,i)=>!(i%2)?a+=e: b+=e);
  return Math.max(a,b);
}