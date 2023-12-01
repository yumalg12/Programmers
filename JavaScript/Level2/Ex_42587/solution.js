function solution(priorities, location) {
    let answer = 0;

    while (priorities.length > 0) {
        let current = priorities.shift();
        let isRun = true;
        
        for (let i = 0; i < priorities.length; i++) {
            if (current < priorities[i]) {
                isRun = false;
                break;
            }
        }
        
        if (isRun) {
            answer++;
            if (location === 0) return answer;
            else location--;
        } else {
            priorities.push(current); 
            if (location === 0) location = priorities.length - 1;
            else location--;        
        }
    }
    return answer;
}