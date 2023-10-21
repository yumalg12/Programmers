function solution(answers) {
    let answer = [];
    let resArr = [0,0,0];
    
    const omr = [[ 1, 2, 3, 4, 5 ],
                [ 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5 ],
                [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5 ]];
    
    answers.forEach((e,i)=>
         omr.forEach((v,num)=>v[i%v.length] === e? resArr[num]++: '')
    );
    
    resArr.forEach((e,i)=>
         e===Math.max(...resArr)? answer.push(i+1): ''
    );
        
    return answer;
}