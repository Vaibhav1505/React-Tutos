function InputItem({handleKeyDown}){

  return <input type="text" placeholder='Enter the food here' onKeyDown={handleKeyDown} /> 
}

export default InputItem;