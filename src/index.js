import $ from 'jquery';
import './css/yacck.css';
import './css/styles.css';
import CurrencyExchanger from './js/exchanger';

const currencies = require('./js/currencies.json');

$('form').on('submit', (e) => {
  e.preventDefault();
  CurrencyExchanger.getRates('ZZZ')
    .then(resp => {
      console.log(resp);
      if (resp.status === 200) {
        console.log('we here 1');
        console.log(resp);
      } else if (resp instanceof Error) {
        console.error(resp.name, resp.message);
      }
    });
});
