import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { CurrencyExchange } from './../src/exchange.js';
import { displayCurrencyCodes } from './../src/userinterface.js';

$(document).ready(function () {

  $("#currency-codes").append(displayCurrencyCodes());

  $("#exchange").click(function () {

    (async () => {
      const currencyFrom = $("#currencyFrom").val();
      const currencyTo = $("#currencyTo").val();
      const currencyAmount = parseInt($("#currencyAmount").val());
      let currencyExchange = new CurrencyExchange();
      const response = await currencyExchange.getExchangeRates(currencyFrom);
      let result = convertCurrency(currencyAmount, currencyTo, response);

      $("#results").html(`${currencyFrom} to ${currencyTo}<br>` +
        `${currencyAmount} = ${result}`
      );
    })();




    function convertCurrency(currencyAmount, currencyTo, response) {

      if (response) {
        let result = 0;

        for (let key in response.conversion_rates) {
          if (key === currencyTo) {
            result = (currencyAmount * response.conversion_rates[key]).toFixed(2);
            break;
          }
        }

        return result;
      }
    }
  });
});
