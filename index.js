function sumOfMultiple(pera) {
  let sum = 0;
  for (let i = 1; i <= pera; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return console.log(sum);
}

sumOfMultiple(10);
