import fs from 'fs';

class FileManager {
  #productsfile;
  #promotionsfile;

  readProductsFile() {
    try {
      this.#productsfile = fs.readFileSync('./public/products.md', 'utf8');
      return this.#convertFileToSystemProduct(this.#productsfile);
    } catch (err) {
      console.error('파일을 읽는 중 오류 발생:', err);
    }
  }

  readPromotionsFile() {
    try {
      this.#promotionsfile = fs.readFileSync('./public/promotions.md', 'utf8');
      return this.#convertFileToSystemPromotion(this.#promotionsfile);
    } catch (err) {
      console.error('파일을 읽는 중 오류 발생:', err);
    }
  }

  updateProductsFile(oldContent, newContent) {
    this.#productsfile = this.#productsfile.replace(oldContent, newContent);

    fs.writeFileSync('./public/products.md', this.#productsfile, 'utf8');
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
