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

function displayConvertedCurrency(resp, currency, dollars, compCurrency) {
  if (!(compCurrency in resp['conversion_rates'])) {
    displayErrorMessage(new Error(`Unable to find ${compCurrency} in available ` + 
      `conversion types, please try a different currency`));
  }

  const convertedAmount = resp['conversion_rates'][compCurrency] * dollars;
  const outString = `${dollars}${currency} = ${convertedAmount}${compCurrency}`;
  writeDisplay(outString, 'success');
}

function displayErrorMessage(error) {
  writeDisplay(error.toString(), 'failure');
}

$('form').on('submit', (e) => {
  e.preventDefault();
  clearDisplay();

  const currencyAmount = parseFloat($('#currency-amount').val());
  const currencyCode = $('#current-currency option:selected').val();
  const currencyCompCode = $('#comparison-currency option:selected').val();

  if (Number.isNaN(currencyAmount)) {
    displayErrorMessage(new Error('Please enter a number.'));
    return;
  }

  CurrencyExchanger.getRates(currencyCode)
    .then(resp => {
      if (resp instanceof Error) {
        throw resp;
      }
      displayConvertedCurrency(resp, currencyCode, currencyAmount, currencyCompCode);
    })
    .catch(err => {
      displayErrorMessage(err);
    });
});

$('#current-currency').html(fillSelectOptions(Object.entries(currencies), 'USD'));
$('#comparison-currency').html(fillSelectOptions(Object.entries(currencies)));
