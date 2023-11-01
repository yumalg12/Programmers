function solution(my_string) {
    let strArr = my_string.split(' ');
    let answer = strArr.reduce((acc,e,i)=>!isNaN(strArr[i])? strArr[i-1] === "-"? acc-Number(e): acc+Number(e): acc, 0);
    return answer;
}