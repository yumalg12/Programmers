const solution = (a, b) => a%2==b%2? a%2? a**2+b**2 :Math.abs(a-b) :2*(a+b);