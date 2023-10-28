function solution(number) {
    var answer = 0;
    [...number].forEach((e) => answer += +e);
    return answer%9;
}