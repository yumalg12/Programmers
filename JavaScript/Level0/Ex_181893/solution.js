function solution(arr, query) {
    query.forEach((e,i)=>i%2===0?arr=arr.slice(0,e+1):arr=arr.slice(e));
    return arr;
}