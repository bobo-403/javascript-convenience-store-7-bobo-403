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

  test.each(['[콜라]', '콜라-10', '[콜라-]', '[-1]'])(
    '[상품명-수량] 형식에 맞지 않은 주문이면 예외가 발생한다.',
    (order) => {
      expect(() => {
        validation.validateOrderFormat(order);
      }).toThrow(ERROR_MESSAGE.INVALIDATE_ORDER_FORAMT);
    }
  );

  test('[상품명-수량] 형식에 맞는 주문이면 예외가 발생하지 않는다.', () => {
    const order = '[콜라-2]';
    expect(() => {
      validation.validateOrderFormat(order);
    }).not.toThrow();
  });
});
