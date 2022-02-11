import $ from 'jquery';
import './css/yacck.css';
import './css/styles.css';
import CurrencyExchanger from './js/exchanger.js';
import fillSelectOptions from './js/utils.js'

const currencies = require('./js/currencies.json');

$('form').on('submit', (e) => {
  e.preventDefault();
  CurrencyExchanger.getRates('ZZZ')
    .then(resp => {
      console.log(resp);
      if (resp.status === 200) {
        // call succesful completion
        return resp.json();
      } else if (resp instanceof Error) {
        // big ol' error time!
        console.error(resp.name, resp.message);
      } else {
        // fetch was successful but server responded with something other than a 200
        console.log(resp);
      }
    });
});
