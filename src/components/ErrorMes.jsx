import React from 'react'

export default function ErrorMes(props) {
  return (
    <>
      {props.fooditem.length === 0 && <h3>I am hungry.</h3>}
    </>
  )
}
