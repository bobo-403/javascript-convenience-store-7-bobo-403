import Inventory from '../model/Inventory.js';
import PromotionManager from './PromotionManager.js';

class StoreManager {
  #inventory;
  #promotionManager;

  constructor() {
    this.#inventory = new Inventory();
    this.#promotionManager = new PromotionManager();
  }

  async processOrder(order) {
    const orderDetail = await this.getOrderDetail(order);
    const freeProduct = this.getFreeProduct(orderDetail);
    return { orderDetail, freeProduct };
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

  getFreeProduct(orderDetail) {
    if (orderDetail.promotionQuantity <= 0) return -1;
    const freeProductQuantity = this.calculatefreeAmount(orderDetail);
    if (freeProductQuantity <= 0) return -1;
    return {
      name: orderDetail.name,
      price: orderDetail.price,
      freeProductQuantity,
    };
  }

  calculatefreeAmount(orderDetail) {
    const promotionProduct = this.getPromotoinProduct(orderDetail.name);
    const promotion = this.#promotionManager.getPromotionInfo(
      promotionProduct.promotion
    );
    const set = promotion.buy + promotion.get;
    const freeProductQuantity = Math.floor(orderDetail.promotionQuantity / set);
    return freeProductQuantity;
  }

  updatePromotionProductInfo(orderDetail) {
    const promotionProduct = this.getPromotoinProduct(orderDetail.name);
    const updatePromotionProduct = { ...promotionProduct };
    updatePromotionProduct.quantity -= orderDetail.promotionQuantity;
    this.#inventory.updateProduct(promotionProduct, updatePromotionProduct);
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
