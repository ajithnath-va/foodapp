import FoodButton from "../Shared/FoodButton";
import "./CartItemUI.css";

const CartItemsUI = ({ prodcartItem, setStateBackdrop, setProdCartItem }) => {
  const onItemRemove = (productId) => {
    let newArr = prodcartItem.filter((it) => it.productId !== productId);
    setProdCartItem(newArr);
  };

  const onIncreaseOrDecreaseProduct = (prodItem, buttonType) => {
    let updatedCarts = prodcartItem.map((singleMap) => {
      const returnValue = { ...singleMap };
      if (returnValue.productId === prodItem.productId) {
        if (buttonType === "plus") {
          returnValue.count = +prodItem.count + 1;
        } else if (buttonType === "minus") {
          returnValue.count = +prodItem.count - 1;
        }
      }

      return returnValue;
    });

    let finalCartItems = updatedCarts.filter((it) => it.count > 0);
    // console.log('filtered item', finalCartItems);
    setProdCartItem(finalCartItems);
  };

  return (
    <div className="backdrop">
      {
        prodcartItem.length > 0 ? 
      <div className="content">
        {prodcartItem.map((prodItem, i) => {
          let priceForEachProd = prodItem.count * prodItem.price;
          return (
            <div key={i}>
              {prodItem.productName} - {prodItem.count} - {priceForEachProd}
              <FoodButton
                buttonText="+"
                buttonClick={() =>
                  onIncreaseOrDecreaseProduct(prodItem, "plus")
                }
              />
              <FoodButton
                buttonText="-"
                buttonClick={() =>
                  onIncreaseOrDecreaseProduct(prodItem, "minus")
                }
              />
              <FoodButton
                buttonText="Remove"
                buttonClick={() => onItemRemove(prodItem.productId)}
              />
            </div>
          );
        })}
        <div>
          Total :
          {prodcartItem?.map((item) => item.count * item.price)?.reduce((prev, next) => prev + next)}
        </div>
      </div> : <div style={{"color": "white"}}>No Cart Items Available</div>
      }
      <FoodButton
        buttonText="Okay"
        buttonClick={() => {
          setStateBackdrop(false);
        }}
      />
    </div>
  );
};

export default CartItemsUI;
