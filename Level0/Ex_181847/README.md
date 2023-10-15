// 처음에는 이렇게 풀었다.
const solution = (n_str) => n_str.slice(n_str.indexOf(n_str.match(/[1-9]/g)[0]))

// 좀더 공부 후 다음과 같이 생각해 보았다.
const solution = (n_str) => String(Number(n_str))
const solution = (n_str) => n_str.replaceAll(0, ' ').trimStart().replaceAll(' ',0)
