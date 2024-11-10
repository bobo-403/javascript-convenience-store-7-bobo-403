import InputView from '../view/InputView.js';
import { PROGRESS_MESSAGE } from '../constant/Message.js';
import retry from './Retry.js';

class MembershipManager {
  #inputView;

  constructor() {
    this.#inputView = new InputView();
  }

  async applyMembershipDiscount(receipt) {
    const totalPrice = receipt.getTotalPrice();
    const promotionDiscount = receipt.getPromotionDiscount();

    const answer = await this.askMembershipDiscount();
    if (answer) {
      const discountedPrice = (totalPrice - promotionDiscount) * 0.3;
      receipt.setMembreshipDiscount(Math.min(8000, discountedPrice));
    }
  }

  async askMembershipDiscount() {
    return await retry(() =>
      this.#inputView.inputYesOrNo(PROGRESS_MESSAGE.ASK_MEMBERSHIP_DISCOUNT)
    );
  }
}

export default MembershipManager;
