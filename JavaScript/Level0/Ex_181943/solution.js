function solution(my_string, overwrite_string, s) {
    var answer = '';
    answer = my_string.slice(0,s) 
        + overwrite_string 
        + my_string.slice(overwrite_string.length + s);
    return answer;
}