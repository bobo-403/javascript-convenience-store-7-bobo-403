import Inventory from '../model/Inventory.js';

class StoreManager {
  #inventory;

  constructor() {
    this.#inventory = new Inventory();
  }

  getPromotoinProduct(name) {
    const products = this.#inventory.getProducts(name);
    return products.find((product) => product.promotion !== 'null');
  }

  getBasicProduct(name) {
    const products = this.#inventory.getProducts(name);
    return products.find((product) => product.promotion == 'null');
  }
}

export default StoreManager;
