// import fetch from "node-fetch";
import axios from "axios";
var input = [
  { amount: 15000.0, currency: "IDR" },
  { amount: 3.1, currency: "EUR" },
];
let finalresult = [];
const host = "api.frankfurter.app";
let nominal = [];
let newrate = 0;
var seom;
function Currency(a) {
  return axios
    .get(`https://${host}/latest?from=${a}`)
    .then((response) => {
      nominal.push(response.data.rates.USD);
      newrate = response.data.rates.USD;
      return newrate;
    })
    .catch((err) => {
      console.log(err);
    });
}

const Convert = (a) => {
  let amount = [];
  let currencyNow;
  let rate = [];
  let number;
  let listCurrency = [];
  let listAmount = [];
  a.forEach((x) => {
    amount = x.amount;
    currencyNow = x.currency;
    Currency(currencyNow).then((result) => {
      nominal.map((y) => {
        number = y * amount;
      });
      rate.push(result);
    });
  });
  for (let i = 0; i < a.length; i++) {
    amount = a[i].amount;
    currencyNow = a[i].currency;
    listCurrency.push(currencyNow);
    listAmount.push(amount);
    Currency(currencyNow).then((result) => {
      rate.push(result);
      // console.log(result, listAmount[i]);
      finalresult.push(Math.round(result * listAmount[i] * 10) / 10);
      console.log(finalresult);
    });
  }
  // return finalresult;
};
console.log(Convert(input));
// console.log(await Currency("IDR"));
