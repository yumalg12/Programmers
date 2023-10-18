const solution = (num_list) => {
    const count = (val) => num_list.filter(e=>e%2===+(val==="odd")).length;
    return [count("even"), count("odd")];
}