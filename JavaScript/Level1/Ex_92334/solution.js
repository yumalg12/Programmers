function solution(id_list, report, k) {
    let repMap = new Map();
    let mailMap = new Map();
    let susMap = new Map();

    id_list.forEach(e=>{
        repMap.set(e,[]);
        mailMap.set(e,0);
        susMap.set(e,0);
    })
    
    Array.from(new Set(report)).forEach(e=>{
        let [reporter, reported] = e.split(' ');
        repMap.set(reporter, [...repMap.get(reporter), reported])
        susMap.set(reported, susMap.get(reported)+1)
    });
            
    id_list.forEach(e=>{
        repMap.get(e).forEach(v=>susMap.get(v)>=k? mailMap.set(e,mailMap.get(e)+1):'')
    })
    
    return Array.from(mailMap.values());
}