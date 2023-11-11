function solution(chicken) {
    let nChick = 0;
    
    while(chicken >= 10) {
        nChick += ~~(chicken/10);
        chicken = ~~(chicken/10) + chicken%10;
    }

    return nChick;
}

// 이런 풀이를 봤는데 설명을 들어도 이해가 안 된다... 이 수식이 같은 결과를 내는 건 알겠는데 도대체 왜 쿠폰 10장으로 치킨을 시키는데 9로 나눈다는 식이 세워지는지를 모르겠음..ㅋㅋㅋㅋ
// const solution = (chicken) => ~~((chicken-1) / 9);
