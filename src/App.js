import { PROGRESS_MESSAGE } from './constant/Message.js';
import retry from './controller/Retry.js';
import StoreManager from './controller/StoreManager.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  #inputView;
  #outputView;
  #storeManager;
  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#storeManager = new StoreManager();
  }
  async run() {
    let reVisit = false;
    do {
      this.#outputView.showGreeting();
      this.#outputView.showInventory();
      const orders = await retry(() => this.#inputView.inputOrder());
      const receipt = await this.#storeManager.processPayment(orders);
      this.#outputView.showReceipt(receipt);
      reVisit = await retry(() =>
        this.#inputView.inputYesOrNo(PROGRESS_MESSAGE.ASK_ADDITIONAL_PURCHASE)
      );
    } while (reVisit);
  }
}

export default App;
