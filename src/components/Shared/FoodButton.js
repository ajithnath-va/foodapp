const FoodButton = (props) => {
  return <button onClick={props.buttonClick}>{props.buttonText}</button>;
};

export default FoodButton;
