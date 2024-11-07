class InputHandler {
  convertInputToSystemOrder(input) {
    const orderItems = input.split(', ');
    const order = this.#transformToOrderObject(orderItems);
    return order;
  }

  convertInputToBoolean(input) {
    if (input == 'Y') return true;
    return false;
  }

  #transformToOrderObject(orderItems) {
    return orderItems.map((orderItem) => {
      const [item, quantity] = orderItem.slice(1, -1).split('-');
      return { item: item, quantity: Number(quantity) };
    });
  }
}

export default InputHandler;
