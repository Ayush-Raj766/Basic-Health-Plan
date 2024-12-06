import React from 'react'
import style from './Items.module.css'
export default function Items(props) {
    
  
  return (
    <>
      <li  className={`list-group-item ${props.bought&&'active'}`}>{props.fooditem2} <button className={`${style.button} btn btn-info`} onClick={props.handleByButton}>Buy</button> </li>
      
    </>
  )
}
// event by default pass hota hai jaruri nahi h uska naam aap event hi rakhe uska naam kuch v rakh sakte hai