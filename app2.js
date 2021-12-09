// import fetch from "node-fetch";
import axios from "axios";
var input = [
  { amount: 15000.0, currency: "IDR" },
  { amount: 3.1, currency: "EUR" },
];
let finalresult = [];
const host = "api.frankfurter.app";
let nominal = [];
var seom;
function Currency(a) {
  return axios
    .get(`https://${host}/latest?from=${a}`)
    .then((response) => {
      nominal.push(response.data.rates.USD);

      return response.data.rates.USD;
    })
    .catch((err) => {
      console.log(err);
    });
}

function Convert(a) {
  // var result = a.split("").reverse().join("");
  let amount = [];
  let currencyNow;
  let rate = [];
  let number;
  let listCurrency = [];
  let listAmount = [];
  let listResult = [];
  let newresult;
  a.forEach((x) => {
    amount = x.amount;
    currencyNow = x.currency;
    Currency(currencyNow).then((result) => {
      // console.log(nominal, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
      nominal.map((y) => {
        number = y * amount;
      });
      // console.log(amount, "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb");
      rate.push(result);
    });
  });
  for (let i = 0; i < a.length; i++) {
    amount = a[i].amount;
    currencyNow = a[i].currency;
    listCurrency.push(currencyNow);
    listAmount.push(amount);
    Currency(currencyNow).then((result) => {
      listAmount.forEach((x) => {
        listResult.push(x * result);
      });
      finalresult.push(listResult[0], listResult[listResult.length - 1]);
      console.log(finalresult);
      // console.log(listCurrency, listAmount, result);
    });
  }
  // console.log(listResult, "ccccccccccccc");
  // return finalresult;
}
console.log(Convert(input));
// console.log(
//   Currency("IDR")
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     })
// );
