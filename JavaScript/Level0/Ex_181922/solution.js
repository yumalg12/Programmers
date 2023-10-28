function solution(arr, queries) {
    queries.forEach(([s,e,k]) => {
        for (;s <= e; s++){
            +!(s%k)? arr[s]++ :'';
        }
    })
    return arr;
}