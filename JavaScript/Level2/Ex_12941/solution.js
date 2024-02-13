const solution = (A,B) => {
    A.sort((a,b)=>b-a);
    B.sort((a,b)=>a-b);
    return A.reduce((acc,a,i)=>acc+a*B[i], 0);
}