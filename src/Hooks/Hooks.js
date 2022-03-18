import React,{useState,useEffect, useContext , useRef} from 'react'
import MoodContext from '../App'
function Hooks() {

    const [count,setCount]=useState(0);
  
    const myBtn = useRef(null);

  const cliclIt = () => myBtn.currect.click()

  useEffect(()=>{
 
  },[])

  return (
    <div>

<button ref={myBtn}>button</button>
{/* <button onClick={()=> setCount(count+1)}>{count}</button> */}

    </div>
  )
}

export default Hooks