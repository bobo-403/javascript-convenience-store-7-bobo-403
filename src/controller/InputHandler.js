import Validation from '../controller/Validation.js';
class InputHandler {
  #validation;

  constructor() {
    this.#validation = new Validation();
  }

  convertInputToSystemOrder(input) {
    this.#validation.validateNotEmpty(input);
    const orderItems = input.split(',');
    const orders = orderItems.map((order) => {
      return this.#generateOrderObject(order);
    });
    return orders;
  }

  convertInputToBoolean(input) {
    this.#validation.validateNotEmpty(input);
    this.#validation.validateDecisionInput(input);
    if (input == 'Y') return true;
    return false;
  }

  #generateOrderObject(order) {
    this.#validation.validateOrderFormat(order);
    const [item, quantity] = order.slice(1, -1).split('-');
    this.#validation.validateProductName(item);
    this.#validation.validateIsNumber(quantity);
    this.#validation.validatePositiveInteger(quantity);
    this.#validation.validateStockAvailability(name, quantity);
    return { item: item, quantity: Number(quantity) };
  }
}

export default InputHandler;
