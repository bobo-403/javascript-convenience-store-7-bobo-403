import { ERROR_MESSAGE } from '../src/constant/Message.js';
import Validation from '../src/controller/Validation.js';

describe('Validation 클래스 테스트', () => {
  let validation;
  beforeEach(() => {
    validation = new Validation();
  });

  test('입력값이 비어있으면 예외가 발생한다.', () => {
    expect(() => {
      validation.validateNotEmpty('');
    }).toThrow(ERROR_MESSAGE.EMPTY_INPUT);
  });
});
