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
}

export default Receipt;
