const solution = (price, money, count) => Math.max(price*count*(count+1)/2-money, 0)