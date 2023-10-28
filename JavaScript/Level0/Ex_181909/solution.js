function solution(my_string) {
    return Array.from(my_string).map((s, i) => my_string.slice(-i)).sort();
}