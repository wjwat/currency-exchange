export default class CurrencyExchanger {
  static async getRates(currencyCode) {
    // pulled from https://www.exchangerate-api.com/docs/standard-requests
    const errorResponses = {
      "unsupported-code": "We do not currently support that currency code.",
      "malformed-request": "The request provided is malformed, please check the provided URL.",
      "invalid-key": "The provided API key is invalid.",
      "inactive-account": "Your account is currently inactive. Please confirm your email address to activate your account.",
      "quota-reached": "You have reached your quota of requests for the month. Check your account to see when you can make more requests."
    };

    try {
      const cached = this.checkCache(currencyCode);
      if (cached) {
        return cached;
      }

      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${currencyCode}`);
      const result = await response.json();

      if (response.status === 200 && result.result === 'success') {
        this.setCachedResponse(currencyCode, result);
        return result;
      } else if (result.result === 'error' && result['error-type'] in errorResponses) {
        throw new Error(`${result['error-type']}: ${errorResponses[result['error-type']]}`);
      } else {
        throw new Error(`${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      return error;
    }
  }

  static checkCache(currencyCode) {
    const cached = this.getCachedResponse(currencyCode);
    if (cached && cached.time_next_update_unix > Math.floor(Date.now() / 1000)) {
      return cached;
    }
    return '';
  }

  static setCachedResponse(currencyCode, item) {
    sessionStorage.setItem(`CurrencyExchangerCache${currencyCode}`, JSON.stringify(item));
  }

  static getCachedResponse(currencyCode) {
    return JSON.parse(sessionStorage.getItem(`CurrencyExchangerCache${currencyCode}`));
  }
}
