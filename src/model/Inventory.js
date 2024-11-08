import fs from 'fs';
class Inventory {
  #products;

  constructor() {
    const fileContent = this.#loadProductsFile();
    this.#products = this.#convertFileToSystemProduct(fileContent);
  }

  #loadProductsFile() {
    try {
      return fs.readFileSync('./public/products.md', 'utf8');
    } catch (err) {
      console.error('파일을 읽는 중 오류 발생:', err);
    }
  }

  #convertFileToSystemProduct(fileContent) {
    const productList = fileContent.split('\r\n');

    return productList.map((product) => {
      return this.#generateProdectObject(product);
    });
  }

  #generateProdectObject(product) {
    const [name, price, quantity, promotion] = product.split(',');
    return {
      name: name,
      price: Number(price),
      quantity: Number(quantity),
      promotion: promotion,
    };
  }
}
const iv = new Inventory();
