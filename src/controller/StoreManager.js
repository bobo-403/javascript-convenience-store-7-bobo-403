import Inventory from '../model/Inventory.js';

class StoreManager {
  #inventory;

  constructor() {
    this.#inventory = new Inventory();
  }

  getBasicProduct(name) {
    const products = this.#inventory.getProducts(name);
    return products.find((product) => product.promotion == 'null');
  }
}

export default StoreManager;
