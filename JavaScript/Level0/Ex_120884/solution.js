function solution(chicken) {
    let nChick = 0;
    
    while(chicken >= 10) {
        nChick += ~~(chicken/10);
        chicken = ~~(chicken/10) + chicken%10;
    }

    return nChick;
}

// 충격적인 풀이가 있었다.
// const solution = (chicken) => ~~((chicken-1) / 9);
// 숫자로 표현하자면 치킨 개수에 0.111111111111111111... 을 곱하는 건데
// 1/9 = 0.1111111111111... 이기 때문에 위 식이 성립한다.
