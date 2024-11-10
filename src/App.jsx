import { useState } from 'react'
import Inputfood from './components/Input'
import FoodList from './components/FoodList';
import Navbar from './components/Navbar';
import "./App.css";
import Mycontainer from './Mycontainer';
import Viewrecipe from './ViewRecipe';

function App() {
  const [foodData,setfoodData]=useState([]);
const [foodid,setKey]=useState("");
  return (
   
      <div>
<Navbar/>

       <Inputfood foodData={foodData} setfoodData={setfoodData}/>
       <Mycontainer>
       <FoodList foodData={foodData} setKey={setKey}/>
     <Viewrecipe foodid={foodid}/>
       </Mycontainer>
     

      </div>
      
    
  )
}

export default App
