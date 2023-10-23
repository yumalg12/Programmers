const solution = (n1, d1, n2, d2) => {
  [a,b] = [n1*d2+n2*d1, d1*d2];
  Math.max(a,b)%Math.min(a,b) === 0? [a,b] = [a/Math.min(a,b), b/Math.min(a,b)]: '';
  for (let i = 2; i <= Math.min(a,b); i++) {
      if (a%i === 0 && b%i === 0) {
          a/=i;
          b/=i;
      }
  };
  return [a,b];
}