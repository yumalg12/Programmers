function solution(a, b) {
    let days = ['SAT','SUN','MON','TUE','WED','THU','FRI'];
    return days[(new Date(2016,a-1,b+1)).getDay()];
}