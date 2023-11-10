const solution = (my_string) => my_string.split(/\D+/).reduce((acc,e)=>acc+Number(e),0);

// 처음 생각한 [a-zA-Z] 말고도 [A-z], \D+ 이 가능하다는 것을 새로 알았다.