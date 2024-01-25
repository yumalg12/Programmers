function solution(s, skip, index) {
    const checkSkip = (n) => {
        if (skip.includes(String.fromCharCode(n))) return checkSkip(n+1);
        else return n;
    }
    const decode = (alphabet) => {
        let i = 0;
        let code = alphabet.charCodeAt(0);
        while (i < index) {
            code = checkSkip(code+1);
            if (code >= 123) code = checkSkip(code-26);
            i++;
        }
        return String.fromCharCode(code);
    }
    return [...s].reduce((acc,e)=>acc+decode(e), '');
}

//세상엔 똑똑한 사람들이 참 많다....
//function solution(s, skip, index) {
//    const dKey = 'abcdefghijklmnopqrstuvwxyz'.match(new RegExp(`[^${skip}]`, 'g'));
//    return [...s].reduce((acc,e)=>acc+dKey[(dKey.indexOf(e)+index)%dKey.length], '');
//}