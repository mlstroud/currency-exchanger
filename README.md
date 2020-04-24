# _Currency Exchanger_

#### By _**Matt Stroud**_
##### _Last Updated April 24, 2020_

## Description

_This is an Epicodus individual project to demonstrate the use of API calls._  
_The application is designed with object oriented programming, and makes use of the ExchangeRate API._  
_Users input a currency in USD and will receive a converted amount in other currencies._

## Technology
* JavaScript & jQuery
* ExchangeRate API
* Webpack
* Node Package Manager
* Jest
* Bootstrap

## Specs
| Behavior                                                                                        | Input    | Output                                                 |
|:------------------------------------------------------------------------------------------------|:---------|-------------------------------------------------------:|
| Program should accept numeric input from user.                                                  | 250      | N/A                                                    |
| Program should accept currency to convert USD to.                                               | EUR      | N/A                                                    |
| Program should make an API call for USD exchange rates.                                         | 250, EUR | { .... EUR .... }                                      |
| Program should display notification with error info if API call did not return 200 OK status.   | API Call | 404 Not Found                                          |
| Program should parse returned JSON object and extract relevant currency.                        | 250, EUR | EUR: 0.9268 (4/24/20)                                  |
| Program should display a notification if the API call did not return the queried exchange rate. | 250, ABC | Sorry, we could not retrieve an exchange rate for ABC. |


## Stretch Goals

## Known Bugs
* None currently known.

## Setup/Installation Requirements

* Clone this repository.
```
git clone https://github.com/mlstroud/currency-exchange
```
* Install the required dependencies and plugins.
```
npm install
```
* Build the project and start the development server.
```
npm run start
```
* _Note: If you are on Mac, open the package.json file and make the following change before running the above command:_  
```
npm run build & webpack-dev-server --open --mode development
```
**change to**
```
npm run build; webpack-dev-server --open --mode development
```

## View Online

* N/A

### License

This software is licensed under the MIT license.

Copyright (c) 2020 **Matt Stroud**