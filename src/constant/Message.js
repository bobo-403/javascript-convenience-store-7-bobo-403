const PROGRESS_MESSAGE = Object.freeze({
  GRETTING_MESSAGE: '안녕하세요. W편의점입니다.',
  AVAILABLE_PRODUCTS: '현재 보유하고 있는 상품입니다.\n',
  ENTER_PRODUCT_QUANTITY:
    '구매하실 상품명과 수량을 입력해 주세요. (예: [사이다-2],[감자칩-1])\n',
  ASK_ADD_FREE_ITEM:
    '현재 {상품명}은(는) 1개를 무료로 더 받을 수 있습니다. 추가하시겠습니까? (Y/N)\n',
  ASK_PURCHASE_WITHOUT_PROMOTION:
    '현재 {상품명} {수량}개는 프로모션 할인이 적용되지 않습니다. 그래도 구매하시겠습니까? (Y/N)',
  ASK_MEMBERSHIP_DISCOUNT: '멤버십 할인을 받으시겠습니까? (Y/N)\n',
  ASK_ADDITIONAL_PURCHASE:
    '감사합니다. 구매하고 싶은 다른 상품이 있나요? (Y/N)',
});

export default PROGRESS_MESSAGE;
