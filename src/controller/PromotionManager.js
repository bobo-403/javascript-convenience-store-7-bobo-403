import { DateTimes } from '@woowacourse/mission-utils';
import FileManager from './FileManager.js';

class PromotionManager {
  #promotions;

  constructor() {
    const fileManager = new FileManager();
    this.#promotions = fileManager.readPromotionsFile();
  }

  getPromotionInfo(promotionName) {
    return this.#promotions.find(
      (promotion) => promotion.name == promotionName
    );
  }

  isPromotionPeriod(promotion) {
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
