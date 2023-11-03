function solution(keyinput, [bx,by]) {
    let [x,y] = [0,0];
    
    const move = (e) => {
        if (e == 'left') {x-=1; check('x');}
        else if (e == 'right') {x+=1; check('x');}
        else if (e == 'up') {y+=1; check('y');}
        else {y-=1; check('y');}
    }
    
    const check = (e) => {
        if (e === 'x') {
            x = Math.max(-(~~(bx/2)), Math.min(x, ~~(bx/2)))
        } else {
            y = Math.max(-(~~(by/2)), Math.min(y, ~~(by/2)))
        }
    }
    
    keyinput.forEach(e=>move(e))

    return [x,y];
}