export const PROGRESS_MESSAGE = Object.freeze({
  GRETTING_MESSAGE: '안녕하세요. W편의점입니다.',
  AVAILABLE_PRODUCTS: '현재 보유하고 있는 상품입니다.\n',
  ENTER_PRODUCT_QUANTITY:
    '\n구매하실 상품명과 수량을 입력해 주세요. (예: [사이다-2],[감자칩-1])\n',
  ASK_ADD_FREE_ITEM: (name) =>
    `\n현재 ${name}은(는) 1개를 무료로 더 받을 수 있습니다. 추가하시겠습니까? (Y/N)\n`,
  ASK_PURCHASE_WITHOUT_PROMOTION: (name, quantity) =>
    `\n현재 ${name} ${quantity}개는 프로모션 할인이 적용되지 않습니다. 그래도 구매하시겠습니까? (Y/N)\n`,
  ASK_MEMBERSHIP_DISCOUNT: '\n멤버십 할인을 받으시겠습니까? (Y/N)\n',
  ASK_ADDITIONAL_PURCHASE:
    '\n감사합니다. 구매하고 싶은 다른 상품이 있나요? (Y/N)\n',
});

export const ERROR_MESSAGE = Object.freeze({
  EMPTY_INPUT: '[ERROR] 입력값이 없습니다.',
  INVALIDATE_ORDER_FORAMT:
    '[ERROR] 올바르지 않은 형식으로 입력했습니다. 다시 입력해 주세요.',
  INVALIDATE_PRODUCT_NAME:
    '[ERROR] 존재하지 않는 상품입니다. 다시 입력해 주세요.',
  INVALIDATE_PRODUCT_QUANTITY: '[ERROR] 수량은 0이상 정수로 입력해주세요',
  NON_NUMERIC_INPUT: '[ERROR] 수량은 숫자로 입력해주세요.',
  INSUFFICIENT_STOCK:
    '[ERROR] 재고 수량을 초과하여 구매할 수 없습니다. 다시 입력해 주세요.',
  INVALID_DECISION_INPUT: '[ERROR] Y 또는 N로 입력해주세요.',
});
