import { useEffect, useState } from "react";

export default function Inputfood({foodData,setfoodData}){
const [myinput,putinput]=useState("");
const URL="https://api.spoonacular.com/recipes/complexSearch"
const API_KEY="3a84471afa88499ebc8b0016bf9f7614"
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
    return(<div>
<input type="text" value={myinput} onChange={(e)=>{putinput(e.target.value)}} ></input>
    </div>)
}