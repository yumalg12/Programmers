const solution = (absolutes, signs) => absolutes.reduce((acc,e,i)=>signs[i]? acc+e: acc-e, 0);