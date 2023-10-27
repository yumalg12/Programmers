function solution(rsp) {
    var win = { 2: 0, 0: 5, 5:2 };
    return [...rsp].reduce((acc,e)=>acc+=win[e], '');
}