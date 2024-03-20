import styles from './CalculatorButton.module.css';

const CalculatorButton = () => {
  let allButtons = ["1", "2", "3", "4", "5", "6", "7", "8", "0", "9", "+", "-", "*", "/", ".", "AC", "="];

 const clickedButton=(myButton,event)=>{
  console.log(event);
  console.log(`${myButton} Clicked!`)
 }

  return <div className={styles.buttonContainer} >
    {allButtons.map(myButton => <button key={myButton} className={styles.buttonn} onClick={()=>{
      clickedButton(myButton,event);
    }}>{myButton}</button>
    )}
  </div>
}

export default CalculatorButton;
