const solution = (s) => {
    let answer = [0,0];
    const toBin = (input) => {
        if (input == 1) return true;
        let clean = input.replace(/0/g,'').length;
        answer[0]++;
        answer[1]+=input.length - clean;
        return toBin(clean.toString(2));
    }
    toBin(s);
    return answer;
}