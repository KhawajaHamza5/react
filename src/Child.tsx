import React from 'react'
import GrandChild from './GrandChild';

function Child(props:any) {
 const add = 17;
let sum = 0;
    return (
  
    <div>
    ==========This Is Child========== <br />
      Sum: {sum=props.value+add}  <br />
Name   : {props.user.name}<br />
Roll No: {props.user.rollNo}<br/>


      <GrandChild value={props.value+add} value1={props.data} user={props.user}
      data1={props.data1}
      />
    </div>
  )
}

export default Child
