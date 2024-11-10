import { DateTimes } from '@woowacourse/mission-utils';
import FileManager from './FileManager.js';

class PromotionManager {
  #promotions;

  constructor() {
    const fileManager = new FileManager();
    this.#promotions = fileManager.readPromotionsFile();
  }

  getPromotionSetSize(product) {
    const promotion = this.getPromotionInfo(product.promotion);
    return promotion.buy + promotion.get;
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
