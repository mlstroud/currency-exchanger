import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { CurrencyExchange } from './../src/exchange.js';
//import { displayCurrencyCodes } from './../src/userinterface.js';

$(document).ready(function () {

  $("#currency-codes").append(displayCurrencyCodes());

  $("#exchange").click(function () {
    (async () => {
      let currencyExchange = new CurrencyExchange();
      const response = await currencyExchange.getExchangeRates("USD");
      displayResults(response);
    })();

    function displayResults(response) {
      if (response) {
        const convertTo = $("#currencyTo").val();

        for (let key in response.conversion_rates) {
          if (key === convertTo) {
            $("#results").append(`Converted to ${key}: ${response.conversion_rates[key]}`)
          }
          //$("#results").append(`${key} - ${response.conversion_rates[key]}<br>`);
        }
      }
    }
  });
});
