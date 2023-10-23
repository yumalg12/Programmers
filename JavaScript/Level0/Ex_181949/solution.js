const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0].split('');
    str.forEach((value, i, str) => (
    str[i] === str[i].toUpperCase()? str[i] = value.toLowerCase(): str[i] = value.toUpperCase()
    ));
    console.log(str.join(''));
});