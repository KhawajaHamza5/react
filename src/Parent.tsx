import React from 'react'
import Child from './Child';

function Parent() {
    const data = "Hello FRom Parent";
    const value = 89;
    const user = {name:"hamza",rollNo:1234,city:"Grw"}
  return (
    <div>
    ==========This Is Parent========== <br />
      <Child value={value}
      user={user}
      data1={data}/>
 
    </div>
  )
}

export default Parent
