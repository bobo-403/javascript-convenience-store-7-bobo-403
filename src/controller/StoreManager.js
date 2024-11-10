import Inventory from '../model/Inventory.js';
import PromotionManager from './PromotionManager.js';
import MembershipManager from './MembershipManager.js';
import Receipt from '../model/Receipt.js';

class StoreManager {
  #inventory;
  #promotionManager;
  #membershipManager;
  #receipt;

  constructor() {
    this.#inventory = new Inventory();
    this.#promotionManager = new PromotionManager();
    this.#membershipManager = new MembershipManager();
    this.#receipt = new Receipt();
  }

  async processPayment(orders) {
    const ordersDetail = [];
    const freeProducts = [];

    for (const order of orders) {
      const { orderDetail, freeProduct } = await this.processOrder(order);
      ordersDetail.push(orderDetail);
      if (freeProduct !== -1) freeProducts.push(freeProduct);
    }

    this.#receipt.setPurchasedProducts(ordersDetail);
    this.#receipt.setFreeProducts(freeProducts);
    this.updateAllProductInfo(ordersDetail);
    await this.#membershipManager.applyMembershipDiscount(this.#receipt);
    return this.#receipt;
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

  updateAllProductInfo(ordersDetail) {
    ordersDetail.forEach((orderDetail) => {
      this.updateProductInfo(orderDetail);
    });
  }

  updateProductInfo(orderDetail) {
    if (orderDetail.promotionQuantity > 0) {
      this.updatePromotionProductInfo(orderDetail);
    }
    if (orderDetail.basicProduct > 0) {
      this.updateBasicProductInfo(orderDetail);
    }
  }

  updatePromotionProductInfo(orderDetail) {
    const promotionProduct = this.getPromotoinProduct(orderDetail.name);
    const updatePromotionProduct = { ...promotionProduct };
    updatePromotionProduct.quantity -= orderDetail.promotionQuantity;
    this.#inventory.updateProduct(promotionProduct, updatePromotionProduct);
  }

  updateBasicProductInfo(orderDetail) {
    const basicProduct = this.getBasicProduct(orderDetail.name);
    const updateBasicProduct = { ...basicProduct };
    updateBasicProduct.quantity -= orderDetail.basicQuantity;
    this.#inventory.updateProduct(basicProduct, updateBasicProduct);
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
