function fiboEvenSum(n) {
  var sum = 0;
  var prev = 1;
  var curr = 2;

  while (curr <= n) {
    sum += curr % 2 ? 0 : curr;
    var temp = curr;
    curr = prev + curr;
    prev = temp;
  }
  return sum;
}