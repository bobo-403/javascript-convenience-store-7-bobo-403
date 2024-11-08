import { ERROR_MESSAGE } from '../src/constant/Message.js';
import Validation from '../src/controller/Validation.js';
import Inventory from '../src/model/Inventory.js';

describe('Validation 클래스 테스트', () => {
  let validation;
  let inventory;
  beforeEach(() => {
    inventory = new Inventory();
    validation = new Validation(inventory);
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

  test.each(['아이스티', '삼각김밥', '불닭볶음면'])(
    '존재하지 않는 상품을 입력한 경우 예외가 발생한다.',
    (name) => {
      expect(() => {
        validation.validateProductName(name);
      }).toThrow(ERROR_MESSAGE.INVALIDATE_PRODUCT_NAME);
    }
  );

  test.each(['콜라', '사이다', '초코바'])(
    '존재하는 상품을 입력한 경우 예외가 발생하지 않는다.',
    (name) => {
      expect(() => {
        validation.validateProductName(name);
      }).not.toThrow();
    }
  );

  test.each(['하나', '둘', '셋'])(
    '수량이 숫자로 입력되지 않은 경우 예외가 발생한다.',
    (quantity) => {
      expect(() => {
        validation.validateIsNumber(quantity);
      }).toThrow(ERROR_MESSAGE.NON_NUMERIC_INPUT);
    }
  );

  test.each(['4', '-1', '0.5'])(
    '수량이 숫자로 입력된 경우 예외가 발생한다.',
    (quantity) => {
      expect(() => {
        validation.validateIsNumber(quantity);
      }).not.toThrow();
    }
  );

  test.each([0, -2, 0.5])(
    '수량이 0초과 정수로 입력되지 않은 경우 예외가 발생한다.',
    (quantity) => {
      expect(() => {
        validation.validatePositiveInteger(quantity);
      }).toThrow(ERROR_MESSAGE.INVALIDATE_PRODUCT_QUANTITY);
    }
  );

  test.each([1, 13, 15])(
    '수량이 0초과 정수로 입력된 경우 예외가 발생한다.',
    (quantity) => {
      expect(() => {
        validation.validatePositiveInteger(quantity);
      }).not.toThrow();
    }
  );

  test('구매 수량이 재고 수량을 초과한 경우 예외가 발생한다.', () => {
    const name = '콜라';
    const quantity = 24;
    expect(() => validation.validateStockAvailability(name, quantity)).toThrow(
      ERROR_MESSAGE.INSUFFICIENT_STOCK
    );
  });

  test('구매 수량이 재고 수량을 초과하지않은 경우 예외가 발생하지 않는다.', () => {
    const name = '콜라';
    const quantity = 10;
    expect(() =>
      validation.validateStockAvailability(name, quantity)
    ).not.toThrow();
  });

  test.each(['yes', '아니오', '1'])(
    '의사결정 시 Y/N 외 다른 값을 입력된 경우 예외가 발생한다.',
    (input) => {
      expect(() => validation.validateDecisionInput(input)).toThrow(
        ERROR_MESSAGE.INVALID_DECISION_INPUT
      );
    }
  );

  test.each(['Y', 'N'])(
    '의사결정 시 Y/N 중 입력된 예외가 발생하지 않는다.',
    (input) => {
      expect(() => validation.validateDecisionInput(input)).not.toThrow();
    }
  );
});
