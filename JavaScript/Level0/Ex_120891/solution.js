const solution = (order) => [...String(order)].reduce((acc,e)=>e>0&&e%3===0? acc+1 : acc, 0);