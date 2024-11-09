# 🏪 4주차 편의점

구매자의 할인 혜택과 재고 상황을 고려하여 최종 결제 금액을 계산하고 안내하는 결제 시스템입니다.

## 🔄 **진행 순서**

1. 환영 인사와 함께 상품명, 가격, 프로모션 이름, 재고를 안내한다.
2. 사용자가 구매할 상품명과 수량을 입력한다.
3. 프로모션 적용 가능한 상품에 대해

- 프로모션 적용이 가능한 상품에 대해 고객이 해당 수량만큼 가져오지 않았을 경우, 혜택에 대한 안내 메시지 출력 후 의사를 입력받는다.
- 프로모션 재고가 부족하여 일부 수량을 프로모션 혜택 없이 결제해야 하는 경우, 일부 수량에 대해 정가로 결제할지 여부에 대한 안내 메시지를 출력 후 의사를 입력받는다.

5. 멤버십 할인 적용 여부를 확인하기 위해 안내 문구를 출력 후 의사를 입력받는다.
6. 구매 상품 내역, 증정 상품 내역, 금액 정보를 출력한다.
7. 추가 구매 여부를 확인하기 위해 안내 문구를 출력 후 의사를 입력받는다.

&emsp; &emsp; (단, 입력값이 유효하지 않으면 계속 입력을 받는다.)

## 📋 구현해야할 기능 목록

#### 입력

- [x] 구매한 상품명과 수량을 입력한다.
- [x] 고객의 의사결정을 위한 답(Y/N)을 입력한다.

#### 출력

- [x] 환영인사를 출력한다.
- [x] 현재 상품 재고현황을 출력한다.
- [ ] 영수증을 출력한다. 영수증은 구매 상품 내역, 증정 상품 내역, 금액 정보가 포함되어있다.

#### 입력값 처리

- [x] 입력된 상품명과 수량을 시스템에서 사용할 수 있는 형식으로 변환한다.
- [x] 주문 항목을 받아 상품명과 수량을 객체로 생성한다.
- [x] 사용자가 입력한 답(Y/N)을 시스템에서 처리할 수 있는 값으로 변환한다.

#### 입력값 검증

- 공통
  - [x] 빈값이 입력되어선 안된다.
- 주문 입력 검증
  - [x] 고객의 구매가 [상품-수량] 형식으로 입력되었는지 확인한다.
  - [x] 상품명이 현재 존재하는 상품인지 확인한다.
  - [x] 수량이 숫자로 입력되었는지 확인한다.
  - [x] 수량이 0초과 정수로 입력되었는지 확인한다.
  - [x] 고객이 입력한 수량이 재고보다 많은지 확인한다.
- 의사 결정 입력 검증
  - [x] 의사결정 시 Y/N 외 다른 값을 입력되어선 안된다.

### 재시도

- [x] 잘못된 입력값을 처리하고 다시 입력을 받는다.

#### 프로모션 할인

- [ ] 오늘 날짜가 프로모션 기간 내에 포함되는지 확인한다.
- [ ] 프로모션 적용이 가능한 상품에 대해 고객이 해당 수량보다 적게 가져온 경우, 필요한 수량을 추가로 가져오면 혜택을 받을 수 있음을 안내한다.
- [ ] 프로모션 재고가 부족하여 일부 수량을 프로모션 혜택 없이 결제해야 하는 경우, 일부 수량에 대해 정가로 결제하게 됨을 안내한다.
- [ ] 고객의 결정에 따라 프로모션 할인을 적용한다.

#### 멤버십 할인

- [ ] 프로모션 적용 후 남은 금액에 대해 멤버십 할인을 적용한다. (최대 한도 8,000원)

#### 재고 관리

- [x] 한 상품 정보에 대해 재고 정보를 문자열로 변환한다.
- [x] 상품의 가격을 고객에게 보여줄 문자열 형태로 변환한다.
- [x] 상품의 수량을 고객에게 보여줄 문자열 형태로 변환한다. (0개인 경우 '재고없음')
- [x] 상품의 프로모션을 고객에게 보여줄 문자열 형태로 변환한다. (없는 경우 빈 문자열)
- [x] 재고 정보를 제공한다.
- [x] 재고에 있는 모든 상품명을 반환한다.
- [x] 특정 상품명에 대한 총 재고 수량을 반환한다.
- [ ] 상품의 프로모션 재고 수량이 구매할 상품의 수량만큼 있는지 확인한다.
- [ ] 고객이 상품을 구매할 때마다, 결제된 수량만큼 해당 상품의 재고에서 차감하여 수량을 관리한다.

#### 파일 관리

- [x] 파일에서 상품 재고 정보를 불러온다.
- [x] 상품 재고 정보를 시스템에서 사용할 수 있는 형태로 변환한다.
- [x] 각 상품을 상품 객체로 생성한다.
- [ ] 파일에서 프로모션 정보를 불러온다.
- [ ] 프로모션 정보를 시스템에서 사용할 수 있는 형태로 변환한다.
- [ ] 각 프로모션을 프로모션 객체로 생성한다.
