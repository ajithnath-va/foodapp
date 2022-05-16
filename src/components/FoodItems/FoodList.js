import { Product, ProductList } from "../../data/ProductList";
import FoodSingle from "./FoodSingle";

const FoodList = ({ prodcartItem, setProdCartItem }) => {
  const onFoodAddCart = (productId, price, foodInput, prodName) => {
    // alert(foodInput.current.value + "Product Id:" + productInfo.productId);
    if (foodInput > 0) {
      let itemExistinCart = false;

      prodcartItem.map((itemExist) => {
        if (itemExist.productId === productId) {
          itemExist.count = +foodInput;
          itemExistinCart = true;
        }
        return itemExist;
      });

      if (!itemExistinCart) {
        setProdCartItem([
          new Product(productId, prodName, price, foodInput),
          ...prodcartItem,
        ]);
      } else {
        setProdCartItem([...prodcartItem]);
      }
    }
  };

  const FoodData = ProductList.map((x, i) => {
    return (
      <li key={i}>
        <FoodSingle
          productInfo={x}
          prodcartItem={prodcartItem}
          setProdCartItem={setProdCartItem}
          key={i}
          onFoodAddCart={onFoodAddCart}
        />
      </li>
    );
  });

  return <ul>{FoodData}</ul>;
};

export default FoodList;
