const solution = (n, m, section) => {
    let painted = section.shift()+m-1;

    return section.reduce((acc,wall)=>{
        if (painted < wall) {
            acc++;
            painted = wall+m-1;
        }
        return acc;
    }, 1)
};