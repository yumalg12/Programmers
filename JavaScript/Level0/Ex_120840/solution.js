const factorial = (num) => Array(num).fill(0).map(e=>num--).reduce((acc,v)=>acc*=v, 1);
const solution = (balls, share) => Math.round(factorial(balls)/(factorial(balls-share)*factorial(share)));