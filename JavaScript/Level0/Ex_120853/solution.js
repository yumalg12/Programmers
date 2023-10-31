function solution(s) {
    let sArr = s.split(' ');
    return sArr.reduce((acc,e,i)=>e!='Z'?acc+=Number(e):acc-=sArr[i-1], 0);
}