function solution(numLog) {
    const char = {'1': 'w', '-1': 's', '10': 'd', '-10': 'a'};
    return numLog.map((e,i) => char[numLog[i+1] - numLog[i]]).join('');
}