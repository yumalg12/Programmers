function solution(spell, dic) {
    spell.forEach(v=>dic = dic.filter(e=>e.includes(v) && (e.indexOf(v) === e.lastIndexOf(v))));
    return +!(dic.length) + 1;
}

//every와 some을 학습했다.
//function solution(spell, dic) {
//    const isCorrect = (e) => spell.every(v=>e.includes(v) && (e.indexOf(v) === e.lastIndexOf(v)))
//    return dic.some(v => isCorrect(v)) ? 1 : 2;
//}