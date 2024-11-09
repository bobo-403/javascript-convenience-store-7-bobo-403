import FileManager from '../controller/FileManager.js';
class Inventory {
  #products;
  #fileManager;

  constructor() {
    this.#fileManager = new FileManager();
    this.#products = this.#fileManager.readProductsFile();
  }

  getProductsString() {
    const productStrings = this.#products.map((product) => {
      return this.#convertSystemProductToString(product);
    });

    return productStrings.join('\n');
  }

  getProductsName() {
    const productsName = [
      ...new Set(this.#products.map((product) => product.name)),
    ];
    return productsName;
  }

  getTotalQuantity(productName) {
    return this.#products
      .filter((product) => product.name === productName)
      .reduce((sum, product) => sum + product.quantity, 0);
  }

  #convertSystemProductToString(product) {
    const price = this.#getPriceString(product);
    const quantity = this.#getQuantityString(product);
    const promotion = this.#getPromotionString(product);
    return `- ${product.name} ${price} ${quantity} ${promotion}`;
  }

  #getPriceString(product) {
    return `${product.price.toLocaleString()}원`;
  }

  #getQuantityString(product) {
    if (product.quantity > 0) return `${product.quantity}개`;
    return '재고없음';
  }

  #getPromotionString(product) {
    if (product.promotion !== 'null') return product.promotion;
    return '';
  }
}

export default Inventory;
