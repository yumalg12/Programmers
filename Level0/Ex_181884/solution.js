const solution = (numbers, n) => numbers.reduce((acc,e)=>acc>n?acc:acc+e);