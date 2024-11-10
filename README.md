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
- [x] 영수증을 출력한다. 영수증은 구매 상품 내역, 증정 상품 내역, 금액 정보가 포함되어있다.

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

#### 편의점 스토어 관리자

- [ ] 주문 목록을 처리하여 영수증에 저장할 정보를 저장한다.
- [ ] 하나의 주문에 대해 주문 세부 정보와 증정 제품 정보를 구한다.
- [ ] 하나의 주문에 대해 주문 세부 정보(상품명, 가격, 프로모션 상품에서의 구매량, 일반 상품에서의 구매량)를 구한다.
- [ ] 하나의 주문에 대해 증정 제품 정보(상품명, 가격, 증정개수)를 반환한다.
- [ ] 하나의 주문에서 상품의 증정 개수를 계산한다.
- [ ] 모든 상품들에 대한 상품 재고 정보를 업데이트한다.
- [ ] 한 상품에 대한 재고 정보를 업데이트한다.
- [ ] 프로모션 상품에 대한 재고 정보를 업데이트 한다.
- [ ] 일반 상품에 대한 재고 정보를 업데이트 한다.
- [ ] 프로모션 상품의 재고 정보를 불러온다.
- [ ] 일반 상품의 재고 정보를 불러온다.

#### 프로모션 할인 관리자

- [x] 해당 프로모션에 대한 정보를 반환한다.
- [x] 오늘 날짜가 프로모션 기간 내에 포함되는지 확인한다.
- [x] 프로모션 할인 세트 개수 정보를 불러온다.
- [x] 프로모션 재고가 부족하여 일부 수량을 프로모션 혜택 없이 결제해야 하는 경우인지 확인한다.
- [x] 프로모션 상품의 부족한 수량이 얼마인지 확인한다.
- [x] 부족한 수량을 계속 구매하는지 여부에 따라 총 구매량과 프로모션 구매량을 반환한다.
- [x] 일부 수량에 대해 정가로 계속해서 구매할 것인지 묻는다.
- [x] 프로모션 적용이 가능한 상품에 대해 고객이 해당 수량보다 적게 가져온 경우인지 확인한다.
- [x] 프로모션 상품을 추가로 가져올 것인지 묻는다.
- [x] 프로모션 상품을 추가 구매할건인지 여부에 따라 총 구매량과 프로모션 구매량을 반환한다.
- [x] 프로모션 상품에 대해 고객의 결정에 따라 변경된 총 상품 구매 수량과 프로모션 상품 구매 수량을 반환한다.

#### 멤버십 할인 관리자

- [ ] 프로모션 적용 후 남은 금액에 대해 멤버십 할인을 적용한다. (최대 한도 8,000원)
- [ ] 멤버십 할인 적용 여부를 묻는다.

#### 영수증

- [ ] 구매하는 상품의 정보를 저장한다. (상품명, 총 수량, 총 금액)
- [ ] 증정 상품의 정보를 저장한다.
- [ ] 총 구매액을 저장한다.
- [ ] 프로모션 할인 금액을 저장한다.
- [ ] 멤버십 할인 금액을 저장한다.
- [ ] 총 지불할 금액을 저장한다.
- [ ] 영수증 내용을 저장한다.

#### 재고

- [x] 한 상품 정보에 대해 재고 정보를 문자열로 변환한다.
- [x] 상품의 가격을 고객에게 보여줄 문자열 형태로 변환한다.
- [x] 상품의 수량을 고객에게 보여줄 문자열 형태로 변환한다. (0개인 경우 '재고없음')
- [x] 상품의 프로모션을 고객에게 보여줄 문자열 형태로 변환한다. (없는 경우 빈 문자열)
- [x] 모든 상품의 재고 정보를 문자열 형태로 제공한다.
- [x] 특정 상품명에 대한 재고 정보를 반환한다.
- [x] 고객이 상품을 구매할 때마다, 결제된 수량만큼 해당 상품의 재고에서 차감하여 수량을 관리한다.

#### 파일 관리

- [x] 파일에서 상품 재고 정보를 불러온다.
- [x] 상품 재고 정보를 시스템에서 사용할 수 있는 형태로 변환한다.
- [x] 각 상품을 상품 객체로 생성한다.
- [x] 상품 재고 정보를 파일에 업데이트 한다.
- [x] 파일에서 프로모션 정보를 불러온다.
- [x] 프로모션 정보를 시스템에서 사용할 수 있는 형태로 변환한다.
- [x] 각 프로모션을 프로모션 객체로 생성한다.
