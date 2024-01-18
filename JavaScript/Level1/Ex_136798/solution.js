function solution(number, limit, power) {
    let ndivs = [];
    for (let n=1; n<=number; n++){
        let divs = new Set();
        for (let i=1; i<=Math.sqrt(n); i++) {
            if (n % i === 0) {
                divs.add(i);
                divs.add(n/i);
            }
        }
        ndivs.push(divs.size);
    }
    return ndivs.reduce((acc,e)=>e>limit?acc+power:acc+e,0);
}

// i*i가 더 나았을지도...