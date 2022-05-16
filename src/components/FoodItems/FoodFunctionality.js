import { useState } from "react";
import FoodList from "./FoodList";
import CartItemsUI from "../Cart/CartItemsUI";

const FoodFunctionality = () => {
  const [prodcartItem, setProdCartItem] = useState([]);
  const [showBackdrop, setStateBackdrop] = useState(false);

  return (
    <>
      {showBackdrop && (
        <CartItemsUI
          prodcartItem={prodcartItem}
          setStateBackdrop={setStateBackdrop}
          setProdCartItem={setProdCartItem}
        />
      )}
      <FoodList prodcartItem={prodcartItem} setProdCartItem={setProdCartItem} />
      {prodcartItem.length > 0 && (
        <h2>
          Cart Count:
          <label
            onClick={() => {
              setStateBackdrop(true);
            }}
            style={{ color: "blue", cursor: "pointer" }}
          >
            {prodcartItem?.map((item) => item.count)?.reduce((prev, next) => prev + next)}
          </label>
        </h2>
      )}
    </>
  );
};

export default FoodFunctionality;
