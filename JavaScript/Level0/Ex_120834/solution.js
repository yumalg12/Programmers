const solution = (age) => [...age.toString()].map(e=>String.fromCharCode(parseInt(e)+97)).join('');