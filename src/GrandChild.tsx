import React from 'react'

function GrandChild(props:any) {
  return (
    <div>
    ==========This is GrandChild========== <br />
    {props.data1} <br />
    Sum    : {props.value}<br/>
    Name   : {props.user.name} <br />
    City   : {props.user.city} <br />
    Roll No: {props.user.rollNo} 

    </div>
  )
}

export default GrandChild
