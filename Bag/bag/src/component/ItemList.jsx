import styles from './ItemList.module.css'
import ItemCountButton from './ItemCountButton'
import { useState } from 'react';


function ItemList() {
  // const items = [
  //   { id: 1, name: "apple" },
  //   { id: 2, name: "banana" },
  //   { id: 3, name: "orange" },
  //   { id: 4, name: "grape" },
  //   { id: 5, name: "strawberry" },
  //   { id: 6, name: "watermelon" },
  //   { id: 7, name: "kiwi" },
  //   { id: 8, name: "pineapple" },
  //   { id: 9, name: "peach" },
  //   { id: 10, name: "pear" },
  //   { id: 11, name: "mango" },
  //   { id: 12, name: "blueberry" },
  //   { id: 13, name: "raspberry" },
  //   { id: 14, name: "lemon" },
  //   { id: 15, name: "lime" },
  //   { id: 16, name: "cherry" },
  //   { id: 17, name: "plum" },
  //   { id: 18, name: "apricot" },
  //   { id: 19, name: "coconut" },
  //   { id: 20, name: "nectarine" },
  //   { id: 21,name:"Bitch"},
  //   { id: 22,name:"paada"}
  // ];

  // const [newitems,setNewItems]=useState([]);
  // const addToList=(event)=>{
  //   if(event.key==='Enter'){
  //     const newItem=event.target.value;
  //     if(newItem!=''){
  //       setNewItems(prevItem=>[...prevItem,newItem]);
  //       event.target.value='';
  //     }
  //   }
  // }
  
  return <div className={[styles.itemList]}>
    {items.map(fruit => <ul><li key={fruit.id}>{fruit.name}<ItemCountButton></ItemCountButton></li></ul>)}



  </div>

}

export default ItemList;