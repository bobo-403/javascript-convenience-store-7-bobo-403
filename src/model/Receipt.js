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

  setFreeProducts(freeProducts) {
    this.#freeProducts = freeProducts;
  }

  setMembreshipDiscount(membershipDiscount) {
    this.#membershipDiscount = membershipDiscount;
  }

  setPaymentAmount() {
    this.#paymentAmount =
      this.#totalPrice - this.#promotionDiscount - this.#membershipDiscount;
  }
}

export default Receipt;
