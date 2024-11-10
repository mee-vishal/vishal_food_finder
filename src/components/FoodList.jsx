import FoodItem from "./FoodItem";
import styles from "./foodlist.module.css"
export default function FoodList({foodData,setKey}){
    return(
        <div className={styles.foodlist}>
          
       {foodData.map((food)=>   <FoodItem  key={food.id} setKey={setKey} food={food}/>)}
    

        </div>
    )
}