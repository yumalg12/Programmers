const solution = (n) => {
    let [a,b] = [0,1];
    for (let i=2; i<=n; i++) [a,b] = [b, (a+b)%1234567];

    return b;
}

//1234567로 나눈 나머지끼리 더하는 것과, 나누지 않은 원래 값끼리 더하는 경우 모두 같은 나머지가 나온다.