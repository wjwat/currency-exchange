import $ from 'jquery';
import './css/yacck.css';
import './css/styles.css';
import CurrencyExchanger from './js/exchanger.js';
import fillSelectOptions from './js/utils.js';

const currencies = require('./js/currencies.json');
const output = $('#output');

function clearDisplay() {
  output.text('');
}

function writeDisplay(str, outClass) {
  output.attr('class', outClass);
  output.html(str);
}

function displayConvertedCurrency(rates, amount, currency, compCurrency) {
  const convertedAmount = rates[compCurrency] * amount;
  const outString = `${amount.toFixed(2)} ${currency} = ` + 
    `${convertedAmount.toFixed(2)} ${compCurrency}`;
  writeDisplay(outString, 'success');
}

function displayErrorMessage(error) {
  writeDisplay(error.toString(), 'failure');
}

$('form').on('submit', (e) => {
  e.preventDefault();
  clearDisplay();

  const amount = parseFloat($('#currency-amount').val());
  const currency = $('#current-currency option:selected').val();
  const currencyComp = $('#comparison-currency option:selected').val();

  if (Number.isNaN(amount)) {
    displayErrorMessage(new Error('Please enter a number.'));
    return;
  }

  CurrencyExchanger.getRates(currency)
    .then(resp => {
      if (resp instanceof Error) {
        throw resp;
      } else if (!(currencyComp in resp["conversion_rates"])) {
        throw new Error(`Unable to find ${currencyComp} in available conversion ` + 
          `types, please try a different currency`);
      }
      displayConvertedCurrency(resp["conversion_rates"], amount, currency, currencyComp);
    })
    .catch(err => {
      displayErrorMessage(err);
    });
});

// Populate select options from our JSON
$('#current-currency').html(fillSelectOptions(Object.entries(currencies), 'USD'));
$('#comparison-currency').html(fillSelectOptions(Object.entries(currencies)));
