const solution = (myString, pat) => +([...myString].map(e=>e==="A"?"B":e==="B"?"A":e).join('').includes(pat)==1)