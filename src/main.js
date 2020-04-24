import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { CurrencyExchange, convertCurrency, storeCurrencyData } from './../src/exchange.js';
import { displayCurrencyCodes, displayResults } from './../src/userinterface.js';

$(document).ready(function () {
  $("#currency-codes").append(displayCurrencyCodes());
  $("#error").hide();

  $("#exchange").click(function () {
    const currencyFrom = $("#currencyFrom").val();
    const currencyTo = $("#currencyTo").val();
    const currencyAmount = parseInt($("#currencyAmount").val());
    sessionStorage.setItem("currencyFrom", " ");
    let result;

    if (sessionStorage.length === 0 || sessionStorage.getItem("currencyFrom") !== currencyFrom) {
      (async () => {
        sessionStorage.setItem("currencyFrom", currencyFrom);
        let currencyExchange = new CurrencyExchange();
        const response = await currencyExchange.getExchangeRates(currencyFrom);
        storeCurrencyData(response);
        result = convertCurrency(currencyAmount, currencyTo, sessionStorage);
        displayResults(result, currencyAmount, currencyFrom, currencyTo);
      })();
    } else {
      result = convertCurrency(currencyAmount, currencyTo, sessionStorage);
      displayResults(result, currencyAmount, currencyFrom, currencyTo);
    }

    console.log(sessionStorage["currencyFrom"]);
  });
});
