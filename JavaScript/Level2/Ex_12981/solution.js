function solution(n, words) {
    const prevWords = new Set([words[0]]);
    for (let i=1; i<words.length; i++) {
        const prevWord = words[i-1];
        const currentWord = words[i];
        if (prevWord[prevWord.length - 1] !== currentWord[0] || prevWords.has(currentWord)) return [(i%n)+1, Math.ceil((i+1)/n)];
        prevWords.add(currentWord);
    }
    return [0, 0];
}