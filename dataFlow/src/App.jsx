import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppHeading from "./components/AppHeading";
import InputItems from "./components/InputItems";
import ItemList from "./components/ItemList";

function App() {
  const [Items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems((prevItem) => [...prevItem, newItem]);
  };

  // const removeItem = (index) => {
  //   const newItems = [...Items];
  //   newItems.splice(index, 1);
  //   setItems(newItems);
  // };
  return (
    <>
      <AppHeading></AppHeading>
      <InputItems addItem={addItem}></InputItems>

      <ItemList Items={Items}></ItemList>
    </>
  );
}

export default App;
