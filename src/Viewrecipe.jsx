import { useEffect, useState } from "react";

export default function Viewrecipe({foodid}){
    const [foodfetch,setfoodfetch]=useState({});
    const URL=`https://api.spoonacular.com/recipes/${foodid}/information`;
    const API_KEY="9e57af850a6242d0a29e20370296c51c";
   
useEffect(
    ()=>{
        async function fooddetail(){
            const data=await fetch(`${URL}?apiKey=${API_KEY}`)
            const getdata=await data.json();
           setfoodfetch(getdata);
        }
        fooddetail();
    },[foodid]
)
return(
    <div>
        {foodid}
        {foodfetch.title}
        <img src={foodfetch.image} alt="not found"/>
    </div>
)
}