import InputHandler from '../src/controller/InputHandler.js';

describe('InputHandler 클래스 테스트', () => {
  let inputHandler;

  beforeEach(() => {
    inputHandler = new InputHandler();
  });

  test.each([
    [
      '[콜라-3], [에너지바-5], [사이다-2]',
      [
        { item: '콜라', quantity: 3 },
        { item: '에너지바', quantity: 5 },
        { item: '사이다', quantity: 2 },
      ],
    ],
    ['[콜라-3]', [{ item: '콜라', quantity: 3 }]],
  ])(
    '입력된 상품명과 수량을 시스템에서 사용할 수 있는 형식으로 변환한다.',
    (input, expectedOrderItems) => {
      expect(inputHandler.convertInputToSystemOrder(input)).toEqual(
        expectedOrderItems
      );
    }
  );

  test.each([
    ['Y', true],
    ['N', false],
  ])(
    '사용자가 입력한 답(Y/N)을 시스템에서 처리할 수 있는 값으로 변환한다.',
    (input, expectedBoolean) => {
      expect(inputHandler.convertInputToBoolean(input)).toEqual(
        expectedBoolean
      );
    }
  );
});
