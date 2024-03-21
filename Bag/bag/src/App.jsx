import ItemList from './component/ItemList'
import './App.css'
import AppHeading from './component/CartHeading'
import TotalItemCount from './component/TotalItemCount'
import InputItem from './component/inputItem'
import { useState } from 'react'

function App() {
  const [foodItems,setfoodItems]=useState([{ id: 1, name: "apple" },
  { id: 2, name: "banana" },
  { id: 3, name: "orange" },]);
  const addItem=(event)=>{
    if(event.key==='Enter'){
      let newAddedItem=event.target.value;
      let itemArr=[...prevItems,newAddedItem];
      if(newAddedItem!=''){
        setfoodItems(itemArr);
      }
    }
  }

  return (
    <>

      <AppHeading></AppHeading>
      <TotalItemCount></TotalItemCount>
      <InputItem handleKeyDown={addItem}></InputItem>
      <ItemList></ItemList>
      
    </>
  )
}

export default App
