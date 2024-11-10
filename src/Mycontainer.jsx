import styles from "./mycontainer.module.css";
export default function Mycontainer({children}){
    return(
        <div className={styles.mycontainer}>
            {children}
        </div>
    )
} 