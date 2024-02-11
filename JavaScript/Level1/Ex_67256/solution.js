function solution(numbers, hand) {
    hand = hand[0].toUpperCase();
    let handPos = {L: [3,0], R: [3,2]};
    const getKeyPos = (n) => n===0? [3,1]: [~~((n-1)/3),(n-1)%3];

    return numbers.reduce((acc,e,i)=>{
        const keyPush = (LR) => {
            acc+=LR;
            handPos[LR] = getKeyPos(e);
        }

        if (/[147]/.test(e)) keyPush('L');
        else if (/[369]/.test(e)) keyPush('R');
        else {
            if (i === 0) keyPush(hand);
            else {
                const [keyX, keyY] = getKeyPos(e);
                const distL = Math.abs(keyX - handPos['L'][0]) + Math.abs(keyY - handPos['L'][1]);
                const distR = Math.abs(keyX - handPos['R'][0]) + Math.abs(keyY - handPos['R'][1]);
               
                if (distL === distR) keyPush(hand);
                else if (distL > distR) keyPush('R');
                else keyPush('L');
            }
        }
        return acc;
    }, '');
}