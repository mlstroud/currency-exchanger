import $ from 'jquery';

export function displayCurrencyCodes() {
  const currency = {
    "AED": "UAE Dirham",
    "ARS": "Argentine Peso",
    "AUD": "Australian Dollar",
    "BGN": "Bulgarian Lev",
    "BSD": "Bahamian Dollar",
    "CAD": "Canadian Dollar",
    "CHF": "Swiss Franc",
    "CLP": "Chilean Peso",
    "CNY": "Chinese Renminbi",
    "COP": "Colombian Peso",
    "CZK": "Czech Koruna",
    "DKK": "Danish Krone",
    "DOP": "Dominican Peso",
    "EGP": "Egyptian Pound",
    "EUR": "Euro",
    "FJD": "Fiji Dollar",
    "GBP": "Pound Sterling",
    "GTQ": "Guatemalan Quetzal",
    "HKD": "Hong Kong Dollar",
    "HRK": "Croatian Kuna",
    "HUF": "Hungarian Forint",
    "IDR": "Indonesian Rupiah",
    "ILS": "Israeli New Shekel",
    "INR": "Indian Rupee",
    "ISK": "Icelandic Krona",
    "JPY": "Japanese Yen",
    "KRW": "South Korean Won",
    "KZT": "Kzakhstani Tenge",
    "MXN": "Mexican Peso",
    "MYR": "Malaysian Ringgit",
    "NOK": "Norwegian Krone",
    "NZD": "New Zealand Dollar",
    "PAB": "Panamanian Balboa",
    "PEN": "Peruvian Sol",
    "PHP": "Philippine Peso",
    "PKR": "Pakistani Rupee",
    "PLN": "Polish Zloty",
    "PYG": "Paraguayan Guarani",
    "RON": "Romanian Leu",
    "RUB": "Russian Ruble",
    "SAR": "Saudi Riyal",
    "SEK": "Swedish Krona",
    "SGD": "Singapore Dollar",
    "THB": "Thai Baht",
    "TRY": "Turkish Lira",
    "TWD": "New Taiwan Dollar",
    "UAH": "Ukrainian Hryvnia",
    "USD": "United States Dollar",
    "UYU": "Uruguayan Peso",
    "ZAR": "South Afrian Rand"
  };

  let output = "";

  for (let key in currency) {
    output +=
      `<tr>` +
      `<td>${key}</td>` +
      `<td>${currency[key]}</td>` +
      `</tr>`;
  }

  return output;
}

export function displayResults(result, currencyAmount, currencyFrom, currencyTo) {
  try {
    if (result) {
      $("#result-from-currency").html(currencyFrom);
      $("#result-to-currency").html(currencyTo);
      $("#result-from-amount").html(currencyAmount);
      $("#result-to-amount").html(result);

      $("#error").hide();
      $("#results").slideDown();
    } else {
      throw new Error("The currency you requested did not exist in our records.");
    }
  } catch (error) {
    displayError(error);
  }
}

export function displayError(error) {

  document.getElementById("error").innerHTML =
    `<p>Sorry, there was an error with your request.</p>` +
    `<table class='table' id="error">` +
    ` <tr>` +
    `   <th>Error</th>` +
    `   <th>Message</th>` +
    ` </tr>` +
    ` <tr>` +
    `   <td>${error.name}</td>` +
    `   <td>${error.message}</td>` +
    ` </tr>` +
    `</table>`;

  $("#results").hide();
  $("#error").slideDown();
}