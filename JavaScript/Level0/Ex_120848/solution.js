function solution(n) {
    var answer = 1;
    let product = 1;
    
    for (;answer<=10;answer++){
        product*=answer;
        if (product > n){
            break;
        } else {
            continue;
        }
    }
    return answer-1;
}