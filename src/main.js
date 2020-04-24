import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { CurrencyExchange } from './../src/exchange.js';
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



    function storeCurrencyData(response) {
      for (let key in response.conversion_rates) {
        sessionStorage.setItem(key, response.conversion_rates[key]);
      }
    }

    function convertCurrency(currencyAmount, currencyTo, response) {
      if (response) {
        let result = 0;

        for (let key in sessionStorage) {
          if (key === currencyTo) {
            result = (currencyAmount * sessionStorage[key]).toFixed(2);
            break;
          }
        }
        return result;
      }
    }
  });
});
