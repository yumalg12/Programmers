function solution(my_string, m, c) {
    let answer = '';
    for (i = 0; i < my_string.length/m; i++){
        answer += my_string.slice(m*i, m*(i+1))[c-1];
    }
    return answer;
}