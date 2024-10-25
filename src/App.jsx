import { useState } from 'react'
import Inputfood from './components/Input'

function App() {
  const [foodData,setfoodData]=useState([]);

  return (
   
      <div>

       <Inputfood foodData={foodData} setfoodData={setfoodData}/>
       {foodData.map((food)=><h3>{food.title}</h3>)}
      </div>
      
    
  )
}

export default App
