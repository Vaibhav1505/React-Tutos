import ErrorMessage from './components/errorMsg'
import React from 'react'
import './App.css'
import FoodItems from './components/foodItems'
import CustomReactComp from './components/CustomReactComp'

//fragments=> a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM

//IN SIMPLE WORDS,,,I REACT WE BASSICALLY NEED THAT IN RETURN THERE IS ONLY ONE DIV OR CHILD....SO FRAGAMENTS HELP US TO RETURN MULTIPLE CHILD IN RETURN....AND AT THE RENCDORING THE EXTRA DIV DOES NOT SHOWED UP!

//<React.fragment> also written as <>



// let foodItems = ['Roti', 'Sabji', 'Daal', 'chawal', 'dahi', 'ghee', 'green vegies'];
// // let fooditems=[];


function App() {

  return <>
    <h2>Healthy Food</h2>
    <ErrorMessage></ErrorMessage>
    <FoodItems></FoodItems>
    <CustomReactComp name="Vaibhav"></CustomReactComp>

  </>
}
//3.40
export default App


//map function-->
//map funciton hame help krta hai...jb ek tarah k chize hame jyada banani ho....large date k upar....jaise...list hai samaan ki...jo server s eaa rahi hai....to....ham bas ek...fuction banayemge...jisme map use krenge...aur phir...map fucntion..according to data...chize rendor krta jayega

//props==> Props are arguments passed into React components.
//Props are passed to components via HTML attributes.
//props basically argunmets jaisa hota hai...jisse hm value change kr krke baar baar use kr skte hai....

//css modules==>CSS Modules let you use the same CSS className name in different files without worrying about naming clashes.
//create module with same name of file for exampel--> for Hello.jsx==> Hello.module.css

//4.09
