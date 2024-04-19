import styles from "./Display.module.css"

//destructuring displayValue, else [Object Object] error wil get
const Display=({displayValue})=>{
    return(
        <input className={styles.display} value={displayValue}type="text" readOnly/>
    )    
}
export default Display