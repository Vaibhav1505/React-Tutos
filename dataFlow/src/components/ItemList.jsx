import { useState } from "react";
import styles from "./ItemList.module.css";

function ItemList({ Items }) {


  

  return (
    <ol className={`${styles["itemList"]} list-group`}>
      {Items.map((item) => (
        <li
          /*key={id}*/ className={`${styles["itemName"]} list-group-item active`}
        >
          {item}{" "}
          <button className={`${styles["deleteButton"]} btn btn-danger`} >
            Delete
          </button>
        </li>
      ))}
    </ol>
  );
}
export default ItemList;
