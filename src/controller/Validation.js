import { ERROR_MESSAGE } from '../constant/Message.js';
import Inventory from '../model/Inventory.js';

class Validation {
  #inventory;

  constructor() {
    this.#inventory = new Inventory();
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
    if (this.#inventory.getProducts(name).length === 0)
      throw new Error(ERROR_MESSAGE.INVALIDATE_PRODUCT_NAME);
  }

  validateIsNumber(quantity) {
    if (isNaN(Number(quantity)))
      throw new Error(ERROR_MESSAGE.NON_NUMERIC_INPUT);
  }

  validatePositiveInteger(quantity) {
    quantity = Number(quantity);
    if (!(Number.isInteger(quantity) && quantity > 0)) {
      throw new Error(ERROR_MESSAGE.INVALIDATE_PRODUCT_QUANTITY);
    }
  }

  validateStockAvailability(name, quantity) {
    const totalQuantity = this.#inventory
      .getProducts(name)
      .reduce((sum, product) => sum + product.quantity, 0);
    if (totalQuantity < Number(quantity))
      throw new Error(ERROR_MESSAGE.INSUFFICIENT_STOCK);
  }

  validateDecisionInput(input) {
    if (!(input === 'Y' || input === 'N'))
      throw new Error(ERROR_MESSAGE.INVALID_DECISION_INPUT);
  }
}

export default Validation;
