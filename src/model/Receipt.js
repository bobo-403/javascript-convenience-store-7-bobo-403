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
