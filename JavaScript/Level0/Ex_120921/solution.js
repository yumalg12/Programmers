function solution(A, B) {
    var answer = 0;
    let aArr = [...A];
    let bArr = [...B];
    while (aArr.join() != bArr.join()){
        aArr.unshift(aArr.pop());
        answer+=1;
        if (answer >= A.length) return -1;
    }
    return answer;
}

// 너무나도 충격적인 답안을 발견했다.....
// let solution=(a,b)=>(b+b).indexOf(a)

// 아이콘 스프라이트 방식을 연상시키는 풀이 같다. 잘 기억했다가 다음에 꼭 써먹어야지