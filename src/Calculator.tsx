import { useState } from "react";
import Button from "./Button"
import "./Calculator.css"
function Calculator() {
        const [inputValue, setInputValue] = useState('');
      
        const handleButtonClick = (value:any) => {
          setInputValue(prev => prev + value); // Update the input value based on button click
        };
        const handleDelButton = (value:any) => {
setInputValue('')
        }
        const handleACButton = (value:any) => {
            setInputValue(prev => prev.slice(0,-1))
                    }
                    const handleEqButton = (value:any) => {
                        setInputValue(eval(value))
                    }
  return (
    <div className='Container'>

        <div className="Calculator">
      <form action="">
        <div className="DisplayText">
            <input type="string" className="InputField" value={inputValue}/>
        </div>
        <div className='row-container'>
        <Button width="40px" color="black" title="AC" backgroundColor="rgb(212, 201, 201)" onClick={() => handleDelButton('')} />
          <Button width="40px" color="black" title="CL" backgroundColor="rgb(212, 201, 201)" onClick={() => handleACButton('')}/>
          <Button width="40px" color="black" title="%" backgroundColor="rgb(212, 201, 201)" onClick={() => handleButtonClick('%')} />
          <Button width="40px" color="white" title="÷" backgroundColor="rgb(255, 174, 0)" onClick={() => handleButtonClick('/')} />
        </div>
   
        <div className='row-container'>
        <Button width="40px"  color="white" title="7" backgroundColor="rgb(54, 48, 48)" onClick={() => handleButtonClick('7')} />
          <Button width="40px" color="white" title="8" backgroundColor="rgb(54, 48, 48)" onClick={() => handleButtonClick('8')} />
          <Button width="40px" color="white" title="9" backgroundColor="rgb(54, 48, 48)" onClick={() => handleButtonClick('9')} />
          <Button width="40px" color="white" title="×" backgroundColor="rgb(255, 174, 0)" onClick={() => handleButtonClick('*')} />
        </div>
        <div className='row-container'>
        <Button width="40px"  color="white" title="4" backgroundColor="rgb(54, 48, 48)" onClick={() => handleButtonClick('4')} />
          <Button width="40px" color="white" title="5" backgroundColor="rgb(54, 48, 48)" onClick={() => handleButtonClick('5')} />
          <Button width="40px" color="white" title="6" backgroundColor="rgb(54, 48, 48)" onClick={() => handleButtonClick('6')} />
          <Button width="40px" color="white" title="–" backgroundColor="rgb(255, 174, 0)" onClick={() => handleButtonClick('-')} />
        </div>
        <div className='row-container'>
        <Button width="40px" color="white" title="1" backgroundColor="rgb(54, 48, 48)" onClick={() => handleButtonClick('1')} />
          <Button width="40px" color="white" title="2" backgroundColor="rgb(54, 48, 48)" onClick={() => handleButtonClick('2')} />
          <Button width="40px" color="white" title="3" backgroundColor="rgb(54, 48, 48)" onClick={() => handleButtonClick('3')} />
          <Button width="40px" color="white" title="+" backgroundColor="rgb(255, 174, 0)" onClick={() => handleButtonClick('+')} />
        </div>
        <div className='row-container'>
       
        <input type="button" value={0} onClick={() => handleButtonClick('0')}  style={{color:"white",width:"95px",borderRadius:"20px",height:"43px",borderStyle:"none",backgroundColor:"rgb(54, 48, 48)",textAlign:"start",paddingLeft:"15px",fontSize:"18px"}}/>
          <Button width="40px" color="white" title="." backgroundColor="rgb(54, 48, 48)" onClick={() => handleButtonClick('.')}/>
          <Button width="40px" color="white" title="=" backgroundColor="rgb(255, 174, 0)" onClick={prev=>setInputValue(eval(inputValue))}/>
        </div>
       
      </form>
      </div>
    </div>
  )
}

export default Calculator
