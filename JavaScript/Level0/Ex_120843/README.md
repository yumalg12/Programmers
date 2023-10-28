이건 numbers가 1부터 순서대로 올라가기에 가능한 풀이이다.
만약 다음과 같이 변경하면 numbers의 값이 달라도 적용할 수 있게 된다.

const solution = (numbers, k) => numbers[2*(k-1)%numbers.length];