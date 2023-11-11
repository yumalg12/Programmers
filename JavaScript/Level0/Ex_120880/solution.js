function solution(numlist, n) {
    let answer = [];
    
    numlist.forEach(e=>{
        let diff = Math.abs(e-n);
        if (!answer[diff]) answer[diff] = [];
        answer[diff].push(e);
    })
    
    answer.forEach(e=>e.sort((a,b)=>b-a));
        
    return answer.flat();
}

// 와ㅠㅠ sort를 이렇게도 쓸 수 있다는 것을 알았다.....
// const solution = (numlist, n) => numlist.sort((a,b)=>Math.abs(a-n) - Math.abs(b-n) || b-a) 