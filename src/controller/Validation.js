import { ERROR_MESSAGE } from '../constant/Message.js';

class Validation {
  validateNotEmpty(input) {
    if (input === '') {
      throw new Error(ERROR_MESSAGE.EMPTY_INPUT);
    }
  }
}

export default Validation;
