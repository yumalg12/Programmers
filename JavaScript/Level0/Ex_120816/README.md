처음에 코드를 조금 길어도 이해하기 쉽게 짜보겠다고 이렇게 짰는데, 역시 더 좋은 방법이 있었다. 좀더 유연한 사고가 필요....

const solution = (slice, n) => {
    let pizza = 1;
    while (pizza*slice < n) {
        pizza++;
    }
    return pizza;
}