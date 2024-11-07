class InputHandler {
  convertInputToSystemOrder(input) {
    const orderItems = input.split(', ');

    const order = orderItems.map((orderItem) => {
      const [item, quantity] = orderItem.slice(1, -1).split('-');
      return { item: item, quantity: Number(quantity) };
    });

    return order;
  }
}

export default InputHandler;
