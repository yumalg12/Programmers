function solution(dots) {
    let [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots;
        
    return +(
        (x1-x2)/(y1-y2) === (x3-x4)/(y3-y4)
        || (x2-x3)/(y2-y3) === (x1-x4)/(y1-y4)
        || (x4-x2)/(y4-y2) === (x3-x1)/(y3-y1)
    );
}

// 그렇게 독특한 코드는 아닌 거 같은데 5점이 나온 이유가 뭘까..?