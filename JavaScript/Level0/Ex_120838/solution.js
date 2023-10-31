const solution = (letter) => {
    const morse = new Map([
        ['.-','a'],['-...','b'],['-.-.','c'],['-..','d'],['.','e'],['..-.','f'],
        ['--.','g'],['....','h'],['..','i'],['.---','j'],['-.-','k'],['.-..','l'],
        ['--','m'],['-.','n'],['---','o'],['.--.','p'],['--.-','q'],['.-.','r'],
        ['...','s'],['-','t'],['..-','u'],['...-','v'],['.--','w'],['-..-','x'],
        ['-.--','y'],['--..','z']
    ]);
    return letter.split(' ').map(e=>morse.get(e)).join('');
}