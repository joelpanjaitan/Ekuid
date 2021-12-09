var array1 = [3, 4, 6, 17, 25, 21, 23];
// var array2 = [3, 6];
// var array3 = [3, 9];
let found;
let index;
let split;
let n = array1.length;
let newdata = [];
let mean;
let median;
var result = [];
function Calculate(a1, a2) {
  // const data = a1.forEach((element) => {
  //  found = a1.find((x) => x < x - 1);
  // });
  for (let i = 0; i < a2; i++) {
    if (a1[i] > a1[i + 1]) {
      found = a1[i];
    }
    index = a1.findIndex((x) => x == found);
  }
  split = a1.splice(0, index + 1);
  //split dan a1

  mean = (arr) => {
    return arr.reduce((a, b) => a + b, 0) / arr.length;
  };
  median = (arr) => {
    let middle = Math.floor(arr.length / 2);
    arr = [...arr].sort((a, b) => a - b);

    return arr.length % 2 == 0
      ? (arr[middle - 1] + arr[middle]) / 2
      : arr[middle];
  };
  //mean(split) median (split)

  var es = split.reduce(
    (a, v) => ({ mean: mean(split), median: median(split) }),
    {}
  );
  var ds = a1.reduce((a, v) => ({ mean: mean(a1), median: median(a1) }), {});
  result.push(es, ds);

  return result;
}
console.log(Calculate(array1, n));
// console.log(testAnyOtherArrayContainment(array1, array3));
// console.log("App started");
