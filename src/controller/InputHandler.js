class InputHandler {
  convertInputToSystemOrder(input) {
    const orderItems = input.split(', ');
    const orders = orderItems.map((orderItem) => {
      return this.#generateOrderObject(orderItem);
    });
    return orders;
  }

  convertInputToBoolean(input) {
    if (input == 'Y') return true;
    return false;
  }

  #generateOrderObject(orderItem) {
    const [item, quantity] = orderItem.slice(1, -1).split('-');
    return { item: item, quantity: Number(quantity) };
  }
}

export default InputHandler;
