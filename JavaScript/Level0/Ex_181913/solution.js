function solution(my_string, queries) {
    let arr = [...my_string];
    queries.forEach((i) => {
        [s,e] = i;
        arr = arr.slice(0,s).concat(arr.slice(s,e+1).reverse()).concat(arr.slice(e+1));
    });
    return arr.join('');
}