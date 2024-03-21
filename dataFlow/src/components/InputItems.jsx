import { useState } from "react";
import styles from "./InputITems.module.css";

function InputItems({ addItem }) {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addItem(inputValue);
      event.target.value = "";
    }
  };
  const handleChange = (event) => {
    setInputValue(event.target.value);
    console.log(`${event.target.value}`);
  };

  

  return (
    <input
      className={[styles.InputSection]}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      type="text"
      placeholder="Enter your Items Here"
    />
  );
}
export default InputItems;
