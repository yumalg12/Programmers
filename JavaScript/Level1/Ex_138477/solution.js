function solution(k, score) {
    let scores = [];
    
    return score.reduce((acc,e)=>{
        if (scores.length < k) {
            scores.push(e);
        } else {
            let min = scores.sort((a,b)=>a-b).shift();
            if (min < e) scores.push(e);
            else scores.push(min);
        }
        acc.push(Math.min(...scores));
        return acc;
    }, []);
}