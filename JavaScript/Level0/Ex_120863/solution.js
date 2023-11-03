function solution(polynomial) {
    let answer = [];
    
    let num = {
        'x': 0,
        'const': 0
    };
    
    let netArr = polynomial.split(' + ');
    netArr.forEach(e=>{
        Number(e)? num['const'] += Number(e)
        : e.length === 1? num['x'] += 1
            : num['x'] += Number(e.split('x')[0])
    })
    
    if (num['x']) {answer.push((num['x']>1? num['x']: '')+'x')}
    if (num['const']) {answer.push(num['const'])}

    return answer.join(' + ');
}