const solution = (left, right) => {
    let answer = 0;
    for (let i=left; i<=right; i++) {
        Number.isInteger(Math.sqrt(i))? answer-=i: answer+=i;
    }
    return answer;
}

//제곱근이 정수면 약수의 개수가 홀수다!!!