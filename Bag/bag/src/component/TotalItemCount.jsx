import styles from './TotalItemCount.module.css';
import ItemList from './ItemList';
import InputItem from './inputItem';

function TotalItemCount(){

  return <>
  <h4 className={[styles.totalItems]}>{`Total items:`}</h4>
  
  
  </>
}

export  default TotalItemCount;