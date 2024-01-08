function solution(food) {
    const half = food.map((e,i)=>String(i).repeat(~~e/2));
    return half.join('')+'0'+half.reverse().join('');
}