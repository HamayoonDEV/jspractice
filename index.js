function fizzBuzz(input) {
  if (input % 3 === 0 && input % 5 === 0) {
    return "fizzBuzz";
  } else if (input % 3 === 0) {
    return "fizz";
  } else if (input % 5 === 0) {
    return "buzz";
  } else if (typeof input !== "number") {
    return NaN;
  }

  return input;
}

console.log(fizzBuzz(true));
