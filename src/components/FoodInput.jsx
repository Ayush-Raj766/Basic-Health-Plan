import React from 'react'
import style from './FoodInput.module.css'
// import Fooditems from './Fooditems'

export default function FoodInput(props) {
  // let handleClick =()=>{
  //   console.log(value)
  // }

  return (
    <div>
      <input type="text" value={props.fooditems} placeholder='Enter Food Items Here' className={style.input} onKeyDown={props.handleKeyDown}/>
      {/* <button className={`btn btn-success ${style.button}`} onClick={handleClick}> Add Item</button> */}
    </div>
  )
}
