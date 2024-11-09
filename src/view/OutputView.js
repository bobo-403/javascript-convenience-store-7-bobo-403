import { Console } from '@woowacourse/mission-utils';
import { PROGRESS_MESSAGE } from '../constant/Message.js';
import Inventory from '../model/Inventory.js';

class OutputView {
  showGreeting() {
    Console.print(PROGRESS_MESSAGE.GRETTING_MESSAGE);
  }

  showInventory() {
    const inventory = new Inventory();
    Console.print(PROGRESS_MESSAGE.AVAILABLE_PRODUCTS);
    Console.print(inventory.getProductsString());
  }
}

export default OutputView;
