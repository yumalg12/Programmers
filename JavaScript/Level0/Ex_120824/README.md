역시 더 간결한 풀이법이 있었다.

const solution = (num_list) => {
    let count = [0,0];
    num_list.forEach(e=>count[e%2]++);
    return count;
}
