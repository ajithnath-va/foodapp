export class Product {
  constructor(productId, productName, price, count = 1) {
    this.productId = productId;
    this.productName = productName;
    this.price = price;
    this.count = count;
  }
}

export const ProductList = [
  new Product(101, "Fried Rice", 100),
  new Product(102, "Chapathi", 50),
  new Product(103, "Dosa", 35),
  new Product(104, "Chicken 65", 135),
];
