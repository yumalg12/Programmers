const solution = (arr) => +arr.every((v,i)=>v.every((e,j)=>+(e==arr[j][i])))