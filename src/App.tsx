
// import React,{useState,Suspense,lazy} from "react"
// const NavBar = lazy(()=>import ('./NavBar'))
// const Home = lazy(()=>import('./Home'))
// function App() {
//   const[text,setText] = useState('')
//   const[pass,setPass] = useState('')
// const handleClick = ()=>{
// let newtext = text.toUpperCase() 
//   setText(newtext)

// }
// const handleChange = (event:any)=>{
//   setText(event.target.value)
// }
// const handleChangepass = (event:any)=>{
//   setPass(event.target.value)
// }
// const handleClickPass = ()=>{
//   setPass(`${pass}1234`)
//   }
//   return (
//     <>\

//    <input type="text" value={text} onChange={handleChange}/>
//   <button onClick={handleClick}>email</button>
//   <input type="text" value={pass} onChange={handleChangepass}/>
//   <button onClick={handleClickPass}>Password</button>
//    <Suspense fallback={<div>Please wait Nav Loading</div>}>
//   <NavBar  name1="About"
//    name2 = "hhhh" name3= "Profile"
//    />
//    </Suspense>
//    <Suspense fallback={<div>Please wait Home Loading</div>}>
// <Home/>
//    </Suspense>
//   </>

//   )
// }

// export default App