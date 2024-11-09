import { Console } from '@woowacourse/mission-utils';
import InputHandler from '../controller/InputHandler.js';
import { PROGRESS_MESSAGE } from '../constant/Message.js';

class InputView {
  #inputHandler;

  constructor() {
    this.#inputHandler = new InputHandler();
  }

  async inputOrder() {
    const input = await Console.readLineAsync(
      PROGRESS_MESSAGE.ENTER_PRODUCT_QUANTITY
    );
    return this.#inputHandler.convertInputToSystemOrder(input);
  }

  async inputYesOrNo(question) {
    const input = await Console.readLineAsync(question);
  }
}

export default InputView;
