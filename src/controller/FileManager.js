import { DateTimes } from '@woowacourse/mission-utils';
import fs from 'fs';

class FileManager {
  readProductsFile() {
    try {
      const fileContent = fs.readFileSync('./public/products.md', 'utf8');
      return this.#convertFileToSystemProduct(fileContent);
    } catch (err) {
      console.error('파일을 읽는 중 오류 발생:', err);
    }
  }

  readPromotionsFile() {
    try {
      const fileContent = fs.readFileSync('./public/promotions.md', 'utf8');
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
}

export default FileManager;
