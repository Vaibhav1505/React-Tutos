import styles from './InputDisplay.module.css';

const DisplayTable = () => {
  return <>
    <input className={styles.inputDisplay}  type="text" placeholder='Enter Value' onChange={(event)=>console.log(event.target.value)} />
  </>
}

export default DisplayTable;