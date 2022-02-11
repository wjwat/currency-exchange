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

function displayConvertedCurrency(resp, dollars, currency) {
  if (!(currency in resp['conversion_rates'])) {
    displayErrorMessage(new Error(`Unable to find ${currency} in available ` + 
      `conversion types, please try a different currency`));
  }

  const convertedAmount = resp['conversion_rates'][currency] * dollars;
  const outString = `$${dollars} = ${convertedAmount}${currency}`;
  writeDisplay(outString, 'success');
}

function displayErrorMessage(error) {
  writeDisplay(error.toString(), 'failure');
}

$('form').on('submit', (e) => {
  e.preventDefault();
  clearDisplay();

  const currencyAmount = parseFloat($('#currency-amount').val());
  const currencyCode = $('#currencies option:selected').val();

  if (Number.isNaN(currencyAmount)) {
    displayErrorMessage(new Error('Please enter a number.'));
    return;
  }

  CurrencyExchanger.getRates('USD')
    .then(resp => {
      if (resp instanceof Error) {
        throw resp;
      }
      displayConvertedCurrency(resp, currencyAmount, currencyCode);
    })
    .catch(err => {
      displayErrorMessage(err);
    });
});

$('#currencies').html(fillSelectOptions(Object.entries(currencies)));
