import Inventory from '../model/Inventory.js';
import PromotionManager from './PromotionManager.js';

class StoreManager {
  #inventory;
  #promotionManager;

  constructor() {
    this.#inventory = new Inventory();
    this.#promotionManager = new PromotionManager();
  }

  async getOrderDetail(order) {
    let promotionQuantity = 0;
    let basicQuantity = 0;
    let totalQuantity = order.quantity;
    const promotionProduct = this.getPromotoinProduct(order.name);
    if (
      promotionProduct &&
      this.#promotionManager.isPromotionPeriod(promotionProduct)
    ) {
      const {
        totalQuantity: newTotalQuantity,
        promotionQuantity: newPromotionQuantity,
      } = await this.#promotionManager.getTotalAndPromoQuantities(
        order.quantity,
        promotionProduct
      );
      totalQuantity = newTotalQuantity;
      promotionQuantity = newPromotionQuantity;
    }
    basicQuantity = totalQuantity - promotionQuantity;
    const basicProduct = this.getBasicProduct(order.name);
    return {
      name: order.name,
      price: basicProduct.price,
      promotionQuantity,
      basicQuantity,
    };
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
