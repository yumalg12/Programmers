//큐 방식
function solution(progresses, speeds) {
    let answer = [];
    let queue = [];
    
    for (let i in progresses) queue.push(Math.ceil((100-progresses[i])/speeds[i]));
    
    while (queue.length > 0) {
        let cnt = 0;
        
        while (queue[0] <= 0) {
            queue.shift();
            cnt++;
        }
        
        if (cnt>0) answer.push(cnt);
        
        for (let i = 0; i < queue.length; i++) queue[i] -= 1;
    }
    
    return answer;
}

//일반 반복문 방식
function solution(progresses, speeds) {
    let answer = [];
    let num = 0;
    let fin = Math.ceil((100-progresses[0])/speeds[0]);
    progresses.map((v,i)=>Math.ceil((100-v)/speeds[i])).forEach(e=>{
        if (e-fin <= 0) {
            num += 1;
        } else if (e-fin > 0) {
            answer.push(num);
            fin += e;
            num = 1;
        }
    })
    answer.push(num);
    return answer;
}