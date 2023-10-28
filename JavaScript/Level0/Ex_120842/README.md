멋진 풀이를 발견했다.
function solution(num_list, n) {
    return Array(num_list.length / n).fill([]).map(() => num_list.splice(0, n))
}

splice가 잘린 값을 리턴하고 원본 배열을 바꾸는 것을 잘 기억해야지