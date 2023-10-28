function solution(arr, queries) {
    var answer = [];
    queries.forEach((ele) => {
        var [s,e,k] = ele;
        var temp = [];
        for (i = s; i <= e; i++){
            (arr[i] > k)? temp.push(arr[i]):'';
        }
        answer.push(temp.sort((a,b)=>a-b)[0]||-1);
    });
    return answer;
}
