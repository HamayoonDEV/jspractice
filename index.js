function checkTruthyNumber(array) {
  let count = 0;
  for (const value of array) {
    if (value) {
      count++;
    }
  }
  return console.log(count);
}

const array = [null, false, 2, 3, 4];

checkTruthyNumber(array);
