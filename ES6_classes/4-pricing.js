import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(v) {
    if (typeof v !== 'number') {
      throw TypeError('Amount must be a number');
    }
    this._amount = v;
  }

  get currency() {
    return this._currency;
  }

  set currency(s) {
    this._currency = s;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`
  }

  convertPrice(amount, conversionRate) {
    return this.ammount * conversionRate;
  }
}
