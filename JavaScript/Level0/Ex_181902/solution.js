function solution(my_string) {
    let answer = [];
    for (i = 65; i <= 122; i++){
        90 < i && i < 97? ''
        : answer.push([...my_string].filter((e) => e === String.fromCharCode(i)).length);
    }
    return answer;
}