import { DateTimes } from '@woowacourse/mission-utils';
import FileManager from './FileManager.js';
import { PROGRESS_MESSAGE } from '../constant/Message.js';
import InputView from '../view/InputView.js';
import retry from './Retry.js';

class PromotionManager {
  #promotions;
  #inputView;

  constructor() {
    const fileManager = new FileManager();
    this.#promotions = fileManager.readPromotionsFile();
    this.#inputView = new InputView();
  }

  async getTotalAndPromoQuantities(quantity, product) {
    const set = this.getPromotionSetSize(product);
    let promotionQuantity = quantity;
    let totalQuantity = quantity;
    if (!this.isPromotionQuantitySufficient(quantity, product.quantity)) {
      return await this.handleInsufficientPromotionQuantity(
        quantity,
        product,
        set
      );
    }
    if (!this.isQuantityCompleteSet(quantity, set)) {
      return await handleIncompleteQuantity(quantity, product);
    }
    return { totalQuantity, promotionQuantity };
  }

  getPromotionSetSize(product) {
    const promotion = this.getPromotionInfo(product.promotion);
    return promotion.buy + promotion.get;
  }

  isPromotionQuantitySufficient(quantity, inventoryQuantity) {
    if (quantity <= inventoryQuantity) return true;
    return false;
  }

  async handleInsufficientPromotionQuantity(quantity, product, set) {
    const shortQuantity = this.getShortQuantity(
      quantity,
      product.quantity,
      set
    );
    const answer = await this.askContinuePurchase(product.name, shortQuantity);
    let totalQuantity = quantity;
    let promotionQuantity = quantity - shortQuantity;
    if (!answer) totalQuantity -= shortQuantity;
    return { totalQuantity, promotionQuantity };
  }

  getShortQuantity(quantity, inventoryQuantity, promotionSetQuantity) {
    return (
      quantity -
      Math.floor(inventoryQuantity / promotionSetQuantity) *
        promotionSetQuantity
    );
  }

  async askContinuePurchase(name, shortQuantity) {
    return await retry(() =>
      this.#inputView.inputYesOrNo(
        PROGRESS_MESSAGE.ASK_PURCHASE_WITHOUT_PROMOTION(name, shortQuantity)
      )
    );
  }

  isQuantityCompleteSet(quantity, promotionSetQuantity) {
    if (quantity % promotionSetQuantity === promotionSetQuantity - 1)
      return false;
    return true;
  }

  async handleIncompleteQuantity(quantity, product) {
    let totalQuantity = quantity;
    if (quantity === product.quantity)
      return { totalQuantity, promotionQuantity: totalQuantity };
    const answer = await this.askAddProduct(product.name);
    if (answer) totalQuantity += 1;
    return { totalQuantity, promotionQuantity: totalQuantity };
  }

  async askAddProduct(name) {
    return await retry(() =>
      this.#inputView.inputYesOrNo(PROGRESS_MESSAGE.ASK_ADD_FREE_ITEM(name))
    );
  }

  getPromotionInfo(promotionName) {
    return this.#promotions.find(
      (promotion) => promotion.name == promotionName
    );
  }

  isPromotionPeriod(product) {
    const promotion = this.getPromotionInfo(product.promotion);
    const currentTime = DateTimes.now();
    if (
      promotion.startDate <= currentTime &&
      currentTime < promotion.endDateNextDay
    )
      return true;
    return false;
  }
}

export default PromotionManager;
