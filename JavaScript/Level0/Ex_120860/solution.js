function solution(dots) {
    let  [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots.sort();
    let xLen = Math.max(x1, x4) - Math.min(x1, x4);
    let yLen = Math.max(y2, y1) - Math.min(y2, y1);
    return xLen * yLen;
}