function solution(players, callings) {
    let order = {};
    players.forEach((e,i)=>order[e]=i);
    callings.forEach(e=>{
        let c = order[e];
        order[e]-=1;
        order[players[c-1]]+=1;
        [players[c-1], players[c]] = [players[c], players[c-1]];
    })
    return players;
}