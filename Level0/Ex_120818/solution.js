const solution = (price) => {
    const dscnt = (ratio) => Math.trunc((1-ratio/100)*price); // ~~ 연산자로 대체 가능
    return price >= 500000? dscnt(20)
         : price >= 300000? dscnt(10)
         : price >= 100000? dscnt(5)
         : dscnt(0)
}