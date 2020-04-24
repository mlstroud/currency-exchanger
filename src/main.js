import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { CurrencyExchange } from './../src/exchange.js';
import { displayCurrencyCodes } from './../src/userinterface.js';

$(document).ready(function () {

  $("#currency-codes").append(displayCurrencyCodes());

  $("#exchange").click(function () {

    const currencyFrom = $("#currencyFrom").val();
    const currencyTo = $("#currencyTo").val();
    const currencyAmount = parseInt($("#currencyAmount").val());

    if (sessionStorage.length === 0) {
      (async () => {
        let currencyExchange = new CurrencyExchange();
        const response = await currencyExchange.getExchangeRates(currencyFrom);
        storeCurrencyData(response);
      })();
    }

    let result = convertCurrency(currencyAmount, currencyTo, sessionStorage);

    $("#results").html(`${currencyFrom} to ${currencyTo}<br>` +
      `${currencyAmount} = ${result}`
    );


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
