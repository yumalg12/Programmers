const solution = (num_str) => [...num_str].reduce((acc,e)=>-(-acc-e));