function primeNumber(number) {
  for (let num = 2; num <= number; num++) {
    let isPrime = true;
    for (let factor = 2; factor < num; factor++) {
      if (num % factor === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      console.log(num);
    }
  }
}
primeNumber(10);
