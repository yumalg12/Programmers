function solution(a, b, c, d) {
    let arr = [a,b,c,d];
    [a,b,c,d] = arr.sort();
    if (a === d) return 1111*a; //1111
    if (a === c || b === d) return Math.pow(10*b+(a===b?d:a),2); //1112, 2223
    if (a === b && c === d) return Math.abs((b+c)*(b-c)) //1122
    if (a != b && b != c && c!= d) return a
    arr.forEach((e, i) => {
        e/arr[i+1] === 1? arr.splice(i, 2):''; //1123, 1223, 1233
    })
    return arr[0]*arr[1] 
}