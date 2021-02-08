function largestPrimeFactor(number) {
  if (number === 2 || number === 3 || number === 5 || number === 7) {
    return number;
  }

  if (number % 2 === 0) {
    return largestPrimeFactor(number/2);
  } 

  if (number % 3 === 0) {
    return largestPrimeFactor(number/3)
  }

  if (number % 5 === 0) {
    return largestPrimeFactor(number/5)
  }

  if (number % 7 === 0) {
    return largestPrimeFactor(number/7)
  }

  var base = 10;
  while (base < number) {
    var lastDigits = [1,3,7,9];
    for (var i=0; i < lastDigits.length; i++) {
      var candidate = base + lastDigits[i];
      if (candidate % 3 > 0 && candidate % 7 > 0 
      && number % candidate === 0) {
        return candidate > number/candidate ? candidate
          : largestPrimeFactor(number/candidate);
      }
    }
    base +=10;
  }    
} 

largestPrimeFactor(13195);