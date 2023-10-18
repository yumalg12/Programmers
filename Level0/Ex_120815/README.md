find 메서드를 적용해 보았다.

개인적으로 다른 사람 풀이 중 이 솔루션이 마음에 들었다. 자꾸 한 줄로 짜게 되는데... 이렇게 짜는 연습을 들여야겠다.

function solution(n) {
    let pizza = 1;
    while (pizza * 6 % n) {
        pizza++;
    }
    return pizza;
}