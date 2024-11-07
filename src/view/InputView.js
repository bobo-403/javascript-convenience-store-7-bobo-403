import { Console } from '@woowacourse/mission-utils';
import InputHandler from '../controller/InputHandler.js';

class InputView {
  #inputHandler;

  constructor() {
    this.#inputHandler = new InputHandler();
  }

  async inputOrder() {
    const input = await Console.readLineAsync(
      '구매하실 상품명과 수량을 입력해 주세요. (예: [사이다-2],[감자칩-1])\n'
    );
  }

  async inputYesOrNo(question) {
    const input = await Console.readLineAsync(question);
  }
}

export default InputView;
