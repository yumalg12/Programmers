const solution = (brown, yellow) => {
    const totalBlock = brown + yellow;
    const minW = Math.ceil(Math.sqrt(totalBlock));
    
    for (let w = minW; w <= totalBlock; w++) {
        if (totalBlock % w === 0) {
            const h = totalBlock / w;
            if (2 * w + 2 * (h - 2) === brown) {
                return [w, h];
            }
        }
    }
}