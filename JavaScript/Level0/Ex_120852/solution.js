function solution(n) {
    let prime = Array(10000 - 1).fill(0).map((e,i)=>e=i+2);

    for (let i = 2; i <= 10000; i++) {
        prime = prime.filter(e=>e<=i || e>i && e%i != 0);
    }
        
    return prime.filter(e=>n%e === 0).sort((a,b)=>a-b);
}