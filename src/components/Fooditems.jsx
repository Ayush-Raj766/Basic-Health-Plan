import React, { useState } from 'react'
import Items from './Items'

export default function Fooditems(props) {
  const [active ,setactive] = useState([])
let onbybtn=(item ,event)=>{
  setactive([...active,item])
}
  return (
    <>
      <ul className="list-group">
      {props.fooditem.map((item) => <Items key ={item} fooditem2 ={item} bought={active.includes(item)} handleByButton ={(event) => onbybtn(item,event)}></Items>)}
      
      </ul>
    </>
  )
}
