function solution(arr1, arr2) {
    let answer = arr1;
    answer.forEach((e,i)=>{
        e.forEach((v,j)=>{
            answer[i][j] = arr1[i][j]+arr2[i][j]
        })
    })
    return answer;
}