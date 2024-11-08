import fs from 'fs';
class Inventory {
  #products;

  constructor() {
    const fileContent = this.#loadProductsFile();
    this.#products = this.#convertFileToSystemProduct(fileContent);
  }

  getProductsString() {
    const productStrings = this.#products.map((product) => {
      return this.#convertSystemProductToString(product);
    });

    return productStrings.join('\n');
  }

  #loadProductsFile() {
    try {
      return fs.readFileSync('./public/products.md', 'utf8');
    } catch (err) {
      console.error('파일을 읽는 중 오류 발생:', err);
    }
  }

  #convertFileToSystemProduct(fileContent) {
    const productList = fileContent.split(/\r?\n/);

    return productList
      .map((product) => {
        return this.#generateProductObject(product);
      })
      .slice(1, -1);
  }

  #generateProductObject(product) {
    const [name, price, quantity, promotion] = product.split(',');
    return {
      name: name,
      price: Number(price),
      quantity: Number(quantity),
      promotion: promotion,
    };
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
