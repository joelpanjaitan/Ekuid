var input = 17000;
var quant = 1;
var input2 = 23000;
var quant2 = 4;
var total = 0;
var temp;
var result = [];
function Money(a, b) {
  temp = a;
  var c = 0;
  var d = 0;
  var e = 0;
  var f = 0;
  var g = 0;
  var h = 0;
  var j = 0;
  for (let i = 1; i <= 7; i++) {
    if (temp >= 100000) {
      while (temp >= 100000) {
        temp -= 100000;
        c++;
        total++;
        result.push(100000);
      }
    }
    if (temp >= 50000) {
      while (temp >= 50000) {
        temp -= 50000;
        d++;
        total++;
        result.push(50000);
      }
    }
    if (temp >= 20000) {
      if (Math.abs(temp - 50000) < Math.abs(temp - 20000)) {
        while (temp >= 20000) {
          temp -= 50000;
          d++;
          total++;
          result.push(50000);
        }
      } else {
        while (temp >= 20000) {
          temp -= 20000;
          e++;
          total++;
        }
      }
    }
    if (temp >= 10000) {
      if (Math.abs(temp - 20000) < Math.abs(temp - 10000)) {
        while (temp >= 10000) {
          temp -= 20000;
          e++;
          total++;
          result.push(20000);
        }
      } else {
        while (temp >= 10000) {
          temp -= 10000;
          f++;
          total++;
          result.push(10000);
        }
      }
    }
    if (total !== b) {
      if (temp % 5000 == 0) {
        while (temp >= 5000) {
          temp -= 5000;
          g++;
          total++;
        }
      }
      if (temp % 2000 == 0) {
        while (temp >= 2000) {
          temp -= 2000;
          h++;
          total++;
          result.push(2000);
        }
      }
      if (temp % 1000 == 0) {
        while (temp >= 1000) {
          temp -= 1000;
          j++;
          total++;
          result.push(1000);
        }
      }
    }
    if (temp >= 5000) {
      while (temp >= 5000) {
        temp -= 5000;
        g++;
        total++;
      }
    }
    if (temp >= 2000) {
      while (temp >= 2000) {
        temp -= 2000;
        h++;
        total++;
        result.push(2000);
      }
    }
    if (temp >= 1000) {
      while (temp >= 1000) {
        temp -= 1000;
        j++;
        total++;
        result.push(1000);
      }
    }
  }
  return result;
}

console.log(Money(input, quant));
console.log(Money(input2, quant2));
