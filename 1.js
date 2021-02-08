// Problem 1: Multiples of 3 and 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

function multiplesOf3and5(number) {
    var subtract = number % 3 ||3;
    var current = number - subtract;
    var sum = 3 + 5;
    while (current > 3) {
      sum += current;
      current -= 3;
    }

    subtract = number % 5 || 5;
    current = number - subtract;
    while (current > 5) {
      if (current % 3) {
        sum += current;
      }
      current -= 5;
    }
    return sum;
}

//this one's easier to understand
function multiplesOf3and5(number) {
    var sum = 0;
    var n = 1;

    while (n * 3 < number) {
      sum += n * 3;
      if (n * 5 % 3 > 0 && n * 5 < number) {
        sum += n * 5;
      }
      n++;
    }
    return sum;
  }

multiplesOf3and5(1000);