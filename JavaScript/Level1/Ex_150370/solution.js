function solution(today, terms, privacies) {
    const policy = terms.reduce((acc, term) => {
        const [type, month] = term.split(' ');
        acc[type] = Number(month);
        return acc;
    }, {});
        
    return privacies.reduce((acc, privacy, i)=>{
        const [date, type] = privacy.split(' ');
        let [y, m, d] = date.split('.');
        
        const newM = Number(m)+Number(policy[type]);
        m = (newM-1)%12+1;
        y = +y+~~((newM-1)/12);
        
        (new Date(`${y}.${m}.${d}`) <= new Date(today))? acc.push(i+1): acc;
        return acc;
    }, []);
}