import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { CurrencyExchange, convertCurrency, storeCurrencyData } from './../src/exchange.js';
import { loadCurrencyCodes, displayResults } from './../src/userinterface.js';

$(document).ready(function () {

  loadCurrencyCodes();
  $("#error").hide();

  $("#exchange").click(function () {

    const currencyFrom = $("#currencyFrom").val();
    const currencyTo = $("#currencyTo").val();
    const currencyAmount = parseInt($("#currencyAmount").val());
    sessionStorage.setItem("currencyFrom", " ");
    let result;

    if (!currencyAmount) {
      $("#error").html("Please input a valid number");
      $("#results").hide();
      $("#error").slideDown();
    }
    else {
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
    }
  });
});
