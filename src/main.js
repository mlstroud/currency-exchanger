import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { CurrencyExchange } from './../src/exchange.js';
import { displayCurrencyCodes } from './../src/userinterface.js';

$(document).ready(function () {

  displayCurrencyCodes();

  $("#exchange").click(function () {
    (async () => {
      let currencyExchange = new CurrencyExchange();
      const response = await currencyExchange.getExchangeRates("USD");
      displayResults(response);
    })();

    function displayResults(response) {
      alert("TEST");
      if (response) {
        $("#results").html(response.conversion_rates.EUR);
      }
    }
  });
});
