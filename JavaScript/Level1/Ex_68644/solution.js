function solution(numbers) {
    let map = new Map();
    let answer = [];
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (!map.has(numbers[i]+numbers[j])) {
                map.set(numbers[i]+numbers[j], 1);
                answer.push(numbers[i]+numbers[j]);
            }
        }
    }
    return answer.sort((a,b)=>a-b);
	
	//시간복잡도를 낮추기 위해 Set을 생략하고 hashmap을 도입했다.