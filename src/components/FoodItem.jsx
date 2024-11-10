import styles from "./fooditem.module.css"
export default function FoodItem({food,setKey}){
    return(
        <div className={styles.maincontentdiv}>
          
            <div className={styles.imagediv}><img src={food.image} className={styles.imagetag}/></div>
<div className={styles.contentheading}><h3>{food.title}</h3></div>
<div className={styles.mybutton} ><button onClick={()=>{console.log(food.id) ; setKey(food.id)}}>view recipe</button></div>
</div>
    )
}