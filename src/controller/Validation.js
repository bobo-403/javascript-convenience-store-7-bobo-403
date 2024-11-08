import { ERROR_MESSAGE } from '../constant/Message.js';

class Validation {
  #inventory;

  constructor(inventory) {
    this.#inventory = inventory;
  }

  validateNotEmpty(input) {
    if (input === '') {
      throw new Error(ERROR_MESSAGE.EMPTY_INPUT);
    }
  }

  validateOrderFormat(order) {
    if (!/^\[([^\]]+)-(.+)\]$/.test(order))
      throw new Error(ERROR_MESSAGE.INVALIDATE_ORDER_FORAMT);
  }

  validateProductName(name) {
    const productsName = this.#inventory.getProductsName();
    if (!productsName.includes(name))
      throw new Error(ERROR_MESSAGE.INVALIDATE_PRODUCT_NAME);
  }

  validateIsNumber(quantity) {
    if (isNaN(Number(quantity)))
      throw new Error(ERROR_MESSAGE.NON_NUMERIC_INPUT);
  }
}

export default Validation;
