function solution(n, slicer, num_list) {
    let [a,b,c] = slicer;
    let answer =
        n===1? num_list.slice(0,b+1)
        :n===2? num_list.slice(a)
        :n===3? num_list.slice(a,b+1)
        :n===4? num_list.slice(a,b+1).filter((e,i) => i%c === 0):'';
    return answer;
}