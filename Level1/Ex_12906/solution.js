function solution(arr){
    let answer = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === answer[answer.length - 1]) {
            continue;
        } else {
            answer.push(arr[i]);
        }
    }
    return answer;
}