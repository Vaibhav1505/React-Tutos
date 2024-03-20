import React from "react";



const ErrorMessage = () => {
  let foodItems = ['Roti', 'Sabji', 'Daal', 'chawal', 'dahi', 'ghee', 'green vegies'];
  // let foodItems=[];
  return <React.Fragment>{foodItems.length === 0 ? <h3> Hungry</h3> : null};</React.Fragment>
}

export default ErrorMessage;