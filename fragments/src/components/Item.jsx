import styles from './Item.module.css'
const Item = (props) => {
  let foodItems = ['Roti', 'Sabji', 'Daal', 'chawal', 'dahi', 'ghee', 'green vegies'];
  return <li classNameName={`${styles["listItemStyling"]} list-group-item`}><span classNameName="prop-span">{props.foodItem}</span></li>
}

export default Item;