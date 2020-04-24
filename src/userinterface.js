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