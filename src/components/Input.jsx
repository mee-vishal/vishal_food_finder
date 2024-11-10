import { useEffect, useState } from "react";
import styles from "./input.module.css"
export default function Inputfood({foodData,setfoodData}){
const [myinput,putinput]=useState("");
const URL="https://api.spoonacular.com/recipes/complexSearch"
const API_KEY="9e57af850a6242d0a29e20370296c51c";
useEffect(
    ()=>{
        async function fetchdata(){
            const data= await fetch(`${URL}?query=${myinput}&apiKey=${API_KEY}`)
            const actualdata=await data.json()
            setfoodData(actualdata.results)
        }
        fetchdata();
    },
[myinput])
    return(<div className={styles.inputdiv}>
<input className={styles.inputfield} placeholder="Type your Dish" type="text" value={myinput} onChange={(e)=>{putinput(e.target.value)}} ></input>
    </div>)
}