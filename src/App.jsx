// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React, { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Fooditems from './components/Fooditems'
import ErrorMes from './components/ErrorMes'
import Container from './components/Container'
import FoodInput from './components/FoodInput'

function App() {
  // const [ textToShow , setTextToShow] = useState('Food Item Entered by User')
  const [fooditem , setfooditem] = useState([])
  // const [count, setCount] = useState(0)
  // let fooditem = ["daal", "green vegitable", "milk", "salad", "roti"]
  // let fooditem =[]
  // let textToShow =' Food Item Entered by User'
  const onKeyDown=(event)=>{
    if(event.key==='Enter'){console.log(event.target.value);
      setfooditem([...fooditem,event.target.value])
  }
}

// const onclick =(event) =>{
//   console.log(event.target)
//   setfooditem([...fooditem,event.target.value])
// }

  return (
    <>
    <Container>
      <h1>helth plan</h1>
      
      <FoodInput handleKeyDown={onKeyDown}  fooditem={fooditem}></FoodInput>
      <ErrorMes fooditem={fooditem}/>
      {/* <p>{textToShow}</p> */}
        <Fooditems fooditem={fooditem}/>
    </Container>
    <Container>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt mollitia officiis saepe accusamus amet pariatur et libero nobis facere nihil! Omnis quia nobis, qui quos laboriosam tempora porro. Blanditiis, quidem quae, obcaecati excepturi dolor minima delectus tenetur temporibus tempora repellendus deleniti culpa, earum magni nulla!</p>
    </Container>
    </>
  )
}

export default App
