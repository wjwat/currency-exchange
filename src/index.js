import $ from 'jquery';
import './css/yacck.css';
import './css/styles.css';
import CurrencyExchanger from './js/exchanger';

const currencies = require('./js/currencies.json');

$('form').on('submit', (e) => {
  e.preventDefault();
  console.log(CurrencyExchanger.getRates('ZZZ'));
});
