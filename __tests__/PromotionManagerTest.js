import PromotionManager from '../src/controller/PromotionManager.js';

describe('PromotionManager 클래스 테스트', () => {
  let promotionManager;
  beforeEach(() => {
    promotionManager = new PromotionManager();
  });

  test('현재 해당 프로모션의 기간이면 true를 반환한다.', () => {
    const promotion = {
      name: '탄산2+1',
      buy: 2,
      get: 1,
      startDate: new Date('2023-12-31T15:00:00.000Z'),
      endDateNextDay: new Date('2024-12-31T15:00:00.000Z'),
    };

    expect(promotionManager.isPromotionPeriod(promotion)).toBe(true);
  });

  test('현재 해당 프로모션의 기간이 아니면 false를 반환한다.', () => {
    const promotion = {
      name: '탄산2+1',
      buy: 2,
      get: 1,
      startDate: new Date('2023-12-31T15:00:00.000Z'),
      endDateNextDay: new Date('2024-04-31T15:00:00.000Z'),
    };

    expect(promotionManager.isPromotionPeriod(promotion)).toBe(false);
  });
});
