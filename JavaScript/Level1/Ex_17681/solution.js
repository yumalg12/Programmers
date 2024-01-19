const solution = (n, arr1, arr2) => arr1.map((e,i)=>(e | arr2[i]).toString(2).padStart(n,'0').replaceAll(/1|0/g, v=>(v == 1? '#' : ' ')));

// 비트와이즈 OR 연산자에 대해 배웠다.