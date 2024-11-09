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
      return this.#convertFileToSystemPromotion(fileContent);
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

  #convertFileToSystemPromotion(fileContent) {
    const promotionList = fileContent.split(/\r?\n/);

    return promotionList
      .map((promotion) => {
        return this.#generatePromotionObject(promotion);
      })
      .slice(1, -1);
  }

  #generatePromotionObject(promotion) {
    const [name, buy, get, startDate, endDate] = promotion.split(',');
    const end = new Date(`${endDate}T00:00:00`);
    return {
      name: name,
      buy: Number(buy),
      get: Number(get),
      startDate: new Date(`${startDate}T00:00:00`),
      endDateNextDay: new Date(end.setDate(end.getDate() + 1)),
    };
  }
}

export default FileManager;
