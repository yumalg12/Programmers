function solution(my_string, overwrite_string, s) {
    var answer = '';
    answer = my_string.substring(0,s) 
        + overwrite_string 
        + my_string.substring(overwrite_string.length + s, my_string.length);
    return answer;
}