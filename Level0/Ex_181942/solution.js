function solution(str1, str2) {
    var answer = '';
    answer += [...str1].map((x, idx) => x+str2[idx]).join('');
    return answer;
}