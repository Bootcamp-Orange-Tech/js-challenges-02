let arr = [6, 4, 3, 8, 5];
let arrNull = [];

arr.forEach(num => (num % 2 === 0) ? arrNull.unshift(num) : arrNull.push(num))

console.log(arrNull); 