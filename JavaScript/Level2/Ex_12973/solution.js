const solution = (s) => {
    const stack = [];
    [...s].forEach(e=>{
        if (stack.length > 0 && stack[stack.length - 1] === e) stack.pop();
        else stack.push(e);
    });
    return +!stack.length;
}