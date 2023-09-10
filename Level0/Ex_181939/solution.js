function solution(a, b) {
    var ab = +(a+''+b);
    var ba = +(b+''+a);
    return (ab < ba)? ba: ab;;
}