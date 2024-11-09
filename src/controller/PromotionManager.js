import { DateTimes } from '@woowacourse/mission-utils';

class PromotionManager {
  IsPromotionPeriod(promotion) {
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
