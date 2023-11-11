function solution(common) {
    [a,b,c] = common;
    return (c-b === b-a)? b-a+common.pop() : (b/a)*common.pop();
}