function solution(myString, pat) {
  var answer = 0;
  while(myString.length >= pat.length && myString.indexOf(pat) != -1){
      myString = myString.slice(myString.indexOf(pat)+1);
      answer++;
  }
  return answer;
}