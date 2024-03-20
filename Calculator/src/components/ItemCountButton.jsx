import React, { useState } from 'react';
import styles from './ItemCountButton.module.css';

function CounterButton() {
  // here useState(0) means value of count in initial state is 0
  const [count, setcount] = useState(0);


  const incrementFunciton = () => {
    setcount(count => count + 1);
    console.log(`Item added!`)
  }
  const decreaseCounter = () => {
    if (count <= 0) {
      console.log("No more Items to remove!")
      return
    }
    else {
      setcount(count => count - 1);
      console.log(`Item removed!`)
    }
  }


  return <div className={[styles.countContainer]}>
    <button className={`btn btn-success ${styles.incButton, styles.buttons}`} onClick={incrementFunciton}>+</button>
    <h3>{`${count}`}</h3>
    <button className={` btn btn-danger ${styles.decButton, styles.buttons}`} onClick={decreaseCounter}>-</button>
  </div>


}
export default CounterButton;
