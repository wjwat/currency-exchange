export default class CurrencyExchanger {
  static async getRates(currencyCode) {
    try {
      const response = await fetch(`https://v6.changerate-api.com/v6/${process.env.API_KEY}/latest/${currencyCode}`);
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.log('shit shawty, we fucked up');
      return error;
    }
  }
}
