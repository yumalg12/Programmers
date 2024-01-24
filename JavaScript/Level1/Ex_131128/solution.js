function solution(X, Y) {
    const common = Array.from(new Set([...X].filter(e=>Y.includes(e))));
    if (common.length === 0) return '-1';
    else if (common.length === 1 && common[0] === '0') return common[0];
        
    const int = common.reduce((acc,e)=>acc+e.repeat(Math.min(X.split(e).length - 1, Y.split(e).length - 1)), '');
    
    return int.split('').sort((a,b)=>b-a).join('');
}