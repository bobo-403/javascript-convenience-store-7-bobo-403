import fs from 'fs';
class Inventory {
  #products;
  constructor() {
    const fileContent = this.#loadProductsFile();
  }

  #loadProductsFile() {
    try {
      return fs.readFileSync('./public/products.md', 'utf8');
    } catch (err) {
      console.error('파일을 읽는 중 오류 발생:', err);
    }
  }
}
const iv = new Inventory();
