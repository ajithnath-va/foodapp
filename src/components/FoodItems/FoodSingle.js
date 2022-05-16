import { useState } from "react";
import FoodButton from "../Shared/FoodButton";

const FoodSingle = ({ productInfo, onFoodAddCart, prodcartItem }) => {
  console.log("single food", prodcartItem);

  let [foodInput, setFoodInput] = useState(1);

  const onProdCntChange = (e) => {
    setFoodInput(e.target.value);
  };
  return (
    <div>
      {productInfo.productName}
      <input type="number" value={foodInput} onChange={onProdCntChange} />
      <FoodButton
        buttonClick={() =>
          onFoodAddCart(
            productInfo.productId,
            productInfo.price,
            +foodInput,
            productInfo.productName
          )
        }
        buttonText="Add to Cart!"
      />
    </div>
  );
};

export default FoodSingle;
