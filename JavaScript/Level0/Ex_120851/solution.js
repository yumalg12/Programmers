const solution = (my_string) => [...my_string].reduce((acc,e)=>Number(e)? acc+=+e: acc, 0);