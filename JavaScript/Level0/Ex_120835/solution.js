function solution(emergency) {
    let eMap = new Map();
    emergency.forEach(e=>eMap.set(e,0));
    emergency.sort((a,b)=>b-a).forEach((e,i)=>eMap.set(e,i+1));
    return [...eMap.values()];
}