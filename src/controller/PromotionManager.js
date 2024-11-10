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

  getPromotionSetSize(product) {
    const promotion = this.getPromotionInfo(product.promotion);
    return promotion.buy + promotion.get;
  }

  async askContinuePurchase(name, shortQuantity) {
    return await retry(() =>
      this.#inputView.inputYesOrNo(
        PROGRESS_MESSAGE.ASK_PURCHASE_WITHOUT_PROMOTION(name, shortQuantity)
      )
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
