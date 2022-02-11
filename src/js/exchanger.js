export default class CurrencyExchanger {
  static async getRates(currencyCode) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${currencyCode}`);
      return {[response.status]: response.json()};
    } catch (error) {
      return error;
    }
  }
}
