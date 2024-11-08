import { Console } from '@woowacourse/mission-utils';
import InputHandler from '../controller/InputHandler.js';
import Message from '../constant/Message.js';

class InputView {
  #inputHandler;

  constructor() {
    this.#inputHandler = new InputHandler();
  }

  async inputOrder() {
    const input = await Console.readLineAsync(Message.ENTER_PRODUCT_QUANTITY);
  }

  async inputYesOrNo(question) {
    const input = await Console.readLineAsync(question);
  }
}

export default InputView;
