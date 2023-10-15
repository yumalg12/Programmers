function solution(arr) {
  var answer = [];
  if (arr.length > arr[0].length) {
      arr.forEach(e=>{
          for (let i=e.length; i<arr.length; i++) e.push(0);
          answer.push(e);
      });
  } else {
      answer = arr;
      if (arr.length < arr[0].length) {
          for (let i=arr.length; i<arr[0].length; i++) answer.push(Array(arr[0].length).fill(0));
      }
  }
  return answer;
}