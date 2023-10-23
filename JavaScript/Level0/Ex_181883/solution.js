function solution(arr, queries) {
  queries.forEach(([s,e])=>{
      for(i=s;i<=e;i++){
          arr[i]+=1
      }
  });
  return arr;
}