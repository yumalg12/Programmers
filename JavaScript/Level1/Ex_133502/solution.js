function solution(ingredient) {
    let stack = [];

    return ingredient.reduce((acc,e) => {
        stack.push(e);
        let len = stack.length;

        if (len >= 4 && stack[len-4] === 1 && stack[len-3] === 2 && stack[len-2] === 3 && e === 1) {
            acc++;
            stack.length -= 4;
        }
        
        return acc
    }, 0);;
}

// splice(-4)와 동일한 역할을 하는 .length -= 4 방법을 익혔다.
// 단순 비교를 위해서는 slice와 같이 새로운 객체를 생성하는 것은 지양해야 하며
// 문자열 조작보다 배열 조작이 성능 상 유리하다는 것을 꼭 기억할 것!