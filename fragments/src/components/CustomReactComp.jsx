import styles from './CustomReactComp.module.css';

const CustomReactComp = (props) => {
  return <h1 classNameName={`${styles["headStyling"]} name-heading`}>{props.name}</h1>
}

export default CustomReactComp;