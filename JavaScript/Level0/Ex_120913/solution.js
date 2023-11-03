const solution = (my_str, n) => Array.from('a'.repeat(Math.ceil(my_str.length/n)), (_,i)=>my_str.slice(i*n, (i+1)*n));

//충격적인 풀이를 발견했다...
//function solution(my_str, n) {
//  return my_str.match(new RegExp(`.{1,${n}}`, "g"));
//}
//
//이런 것도 정규식으로 되는구나....