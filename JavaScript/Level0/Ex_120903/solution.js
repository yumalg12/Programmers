const solution = (s1, s2) => s1.filter(e=>(new Set(s2)).has(e)).length;