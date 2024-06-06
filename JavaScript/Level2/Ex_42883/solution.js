const solution = (number, k) => {
    let del = k;
    const answer = [...number].reduce((acc, n) => {
        while (k > 0 && acc[acc.length - 1] < n) {
            acc.pop();
            k--;
        }
        acc.push(n);
        return acc;
    }, []);
    
    return answer.slice(0, number.length - del).join('');
}