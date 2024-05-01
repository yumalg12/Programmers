const gcd = (a,b) => {
    return b? gcd(b, a%b) : a;
}

const lcm = (a,b) => {
    return (a*b)/gcd(a,b);
}

const solution = (arr) => {
    arr.sort((a,b)=>a-b);
    let curr = 1;
    return arr.reduce((gcd,e)=>{
        curr = lcm(curr, e);
        return curr;
    })
}