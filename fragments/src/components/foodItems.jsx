import Item from "./Item";

// let foodItems=[];
const FoodItems = () => {
  let foodItems = ['Roti', 'Sabji', 'Daal', 'chawal', 'dahi', 'ghee', 'green vegies'];
  // let fooditems=[];
  return <ul classNameName="list-group">
    {foodItems.map((item) => <Item foodItem={item}></Item>
    )}
  </ul>
}
export default FoodItems;
