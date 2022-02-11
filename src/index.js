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

function displayConvertedCurrency(resp, dollars, currency) {
  const convertedAmount = resp['conversion_rates'][currency] * dollars;
  const outString = `$${dollars} = ${convertedAmount}`;
  output.attr('class', 'success');
  output.html(outString);
}

function displayErrorMessage(error) {
  output.attr('class', 'failure');
  output.html(error.toString());
}

$('form').on('submit', (e) => {
  e.preventDefault();
  clearDisplay();

  const currencyAmount = parseInt($('#currency-amount').val());
  const currencyCode = $('#currencies option:selected').val();

  if (!Number.isInteger(currencyAmount)) {
    console.log('WRONG!');
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
