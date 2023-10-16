const solution = (arr1, arr2) => {
  let [l1, l2] = [arr1.length, arr2.length];
  let [s1, s2] = [arr1.reduce((acc,e)=>acc+e), arr2.reduce((acc,e)=>acc+e)];    
  return l1>l2?1 :l1==l2? s1>s2?1 :s1==s2?0 :-1 :-1
}