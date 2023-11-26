const solution = (numbers) => numbers.map(e=>String(e)).sort((a,b)=>(b+a)-(a+b)).join('').replace(/^0+/, '0');

//처음에 재귀함수로 풀었는데 계속 런타임 에러가 났다.
//sort 메서드 응용법을 익힐 수 있었다.