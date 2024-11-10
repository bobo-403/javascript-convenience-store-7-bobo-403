import InputView from '../view/InputView.js';
import { PROGRESS_MESSAGE } from '../constant/Message.js';
import retry from './Retry.js';

class MembershipManager {
  #inputView;

  constructor() {
    this.#inputView = new InputView();
  }

  async askMembershipDiscount() {
    return await retry(() =>
      this.#inputView.inputYesOrNo(PROGRESS_MESSAGE.ASK_MEMBERSHIP_DISCOUNT)
    );
  }
}

export default MembershipManager;
