import React, { useState } from 'react'

interface ButtonProps{
    color:string,
    title:string,
    backgroundColor:string,
    width:string,
    onClick: (value: string) => void;
}
function Button({color, title,  backgroundColor, onClick
}:ButtonProps) {
    const [value,setValue] = useState('');
    const handleClick = (e:any) => {
        setValue(e.target.value);
    };
  return (
    <div>
      <input type="button" value={title} onClick={() => onClick(title)} 
      style={{width:"43px",height:"43px",borderRadius:"100%",backgroundColor:backgroundColor,borderStyle:"none",color:color,fontSize:"20px",
    fontWeight:"400"
 }}
      />
      <p></p>
    </div>
  )
}

export default Button
