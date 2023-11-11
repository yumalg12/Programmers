function solution(before, after) {
    
    const extract = (input) => {
        let inputMap = new Map();
        [...input].sort().forEach(e=>inputMap.has(e)?inputMap.set(e, inputMap.get(e)+1): inputMap.set(e,1));
        let resStr = '';
        Array.from(inputMap).forEach(e=>resStr+=e.join(''));
        return resStr;
    }
    
    return +(extract(before) === extract(after));
}

// 어쩐지 풀면서도 이건 아니다 싶었는데..ㅋㅋㅋㅋ
// const solution = (before, after) => +([...before].sort().join('') === [...after].sort().join(''))