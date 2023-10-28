function solution(numbers, direction) {
    direction === 'right'?
        numbers.unshift(numbers.pop()) // pop한 결과물을 맨 앞에 삽입함
        : numbers.push(numbers.shift()) // shift로 제거된 값을 shift된 배열의 맨 뒤에 삽입함
    return numbers;
}

원래는 이렇게 풀었다. 복잡하다.....
function solution(numbers, direction) {
    let terminal = direction === 'right'? numbers.slice().reverse()[0]: numbers[0];
    return direction === 'right'? [terminal, ...numbers].splice(0,numbers.length): [...numbers, terminal].splice(-numbers.length);
}

shift와 unshift를 도입해 봤는데, shift 이해가 조금 어려웠다.
shift 메서드를 가하면 리턴되는 값 자체는 shift로 인해 제거된 값이다. 그와 동시에 원 배열이 변경된다.
그렇기 때문에 shift를 push의 인수로 넣어주면 원하는 동작이 된다.


