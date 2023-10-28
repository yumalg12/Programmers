function solution(l, r) {
    var answer = [];
    while(l<=r){
        /[^05]/.exec(l)? '':answer.push(l);
        l++;
    }
    return answer.length? answer: [-1];
}