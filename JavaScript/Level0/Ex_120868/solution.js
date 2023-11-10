function solution(sides) {
    var answer = 0;
    let otherSide = 1;
    while(otherSide <= sides[0]+sides[1]) {
        let newSides = [...sides, otherSide].sort((a,b)=>b-a);
        (newSides[0] < (newSides[1] + newSides[2])) ? answer++: '';
        otherSide++;
    }
    return answer;
}


//const solution = (sides) => Math.min(...sides)*2-1;
//"sides = [a,b] 이고(a>b라고 가정, 이는 sort해주면됩니다.) 새로 주어지는 변의 길이를 c라고 했을 때, a가 가장 긴변인 경우 즉 a > c인 경우 b + c > a > c 이므로 a > c > a-b 이기 때문에 c의 정수 갯수는 b-1개입니다. / c가 가장 긴변인 경우도 이런식으로 하면 되고 a=c 인경우 한가지 이므로 2b-1이 나옵니다."
//(maxValue+1) - (maxValue-minValue+1) + (maxValue+minValue) - (maxValue+1) -> minValue + minValue - 1 -> minValue * 2 + 1
//라고 하는데 이해를 못 하겠다 ㅠㅠ