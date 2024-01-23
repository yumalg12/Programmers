function solution(babbling) {
    const rep = /^(aya|ye|woo|ma)+$/;
    const dup = /(aya|ye|woo|ma)\1+/;

    return babbling.reduce((acc,e) => (rep.test(e) && !dup.test(e))? acc+1: acc, 0);
}