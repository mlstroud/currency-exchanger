import { displayError } from './../src/userinterface.js';

export class CurrencyExchange {
  async getExchangeRates(currency) {
    try {
      let response = await fetch(`https://prime.exchangerate-api.com/v5/${process.env.API_KEY}/latest/${currency}`);
      let jsonResponse;

      if (response.ok && response.status == 200) {
        jsonResponse = await response.json();
      } else {
        jsonResponse = false;
      }
      return jsonResponse;
    } catch (error) {
      displayError(error);
    }
  }
}

export function storeCurrencyData(response) {
  for (let key in response.conversion_rates) {
    sessionStorage.setItem(key, response.conversion_rates[key]);
  }
}