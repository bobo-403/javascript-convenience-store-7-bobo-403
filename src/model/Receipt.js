class Receipt {
  #purchasedProducts;
  #freeProducts;
  #totalPrice;
  #promotionDiscount;
  #membershipDiscount;
  #paymentAmount;

  constructor() {
    this.#purchasedProducts = [];
    this.#freeProducts = [];
    this.#totalPrice = 0;
    this.#promotionDiscount = 0;
    this.#membershipDiscount = 0;
    this.#paymentAmount = 0;
  }

  setPurchasedProducts(purchasedProducts) {
    this.#purchasedProducts = purchasedProducts.map((product) => {
      const totalQuantity = product.promotionQuantity + product.basicQuantity;
      const totalPrice = product.price * totalQuantity;
      return {
        name: product.name,
        totalQuantity,
        totalPrice,
      };
    });
    this.setTotalPrice(this.#purchasedProducts);
  }

  setFreeProducts(freeProducts) {
    this.#freeProducts = freeProducts;
    this.setPromotionDiscount();
  }

  setTotalPrice(purchasedProducts) {
    this.#totalPrice = purchasedProducts.reduce((sum, product) => {
      return sum + product.totalPrice;
    }, 0);
  }

  setPromotionDiscount() {
    this.#promotionDiscount = this.#freeProducts.reduce((sum, product) => {
      return sum + product.freeProductQuantity * product.price;
    }, 0);
  }

  setMembreshipDiscount(membershipDiscount) {
    this.#membershipDiscount = membershipDiscount;
  }

  setPaymentAmount() {
    this.#paymentAmount =
      this.#totalPrice - this.#promotionDiscount - this.#membershipDiscount;
  }

  printReceipt() {
    this.setPaymentAmount();
    let receiptString = '\n==============W 편의점================\n';
    receiptString += '상품명\t\t수량\t금액\n';

    this.#purchasedProducts.forEach((product) => {
      receiptString += `${product.name}\t\t${
        product.totalQuantity
      }\t${product.totalPrice.toLocaleString()}\n`;
    });

    receiptString += '=============증정===============\n';

    this.#freeProducts.forEach((product) => {
      receiptString += `${product.name}\t\t${product.freeProductQuantity}\n`;
    });

    receiptString += '====================================\n';
    receiptString += `총구매액\t\t${this.#totalPrice.toLocaleString()}\n`;
    receiptString += `행사할인\t\t-${this.#promotionDiscount.toLocaleString()}\n`;
    receiptString += `멤버십할인\t\t-${this.#membershipDiscount.toLocaleString()}\n`;
    receiptString += `내실돈\t\t${this.#paymentAmount.toLocaleString()}\n`;

    return receiptString;
  }

  getTotalPrice() {
    return this.#totalPrice;
  }
}

export default Receipt;
