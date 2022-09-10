import React,{useState} from 'react'
import Description from './Description';


export default function City(props) {

  const [toggle,setToggle] = useState(false);


  //if toggle is true show the description.
  const show = () =>{
    if(toggle)
    return <Description desc = {props.vol.Description}/>
  }
  
  //change color background
  const changeColor = () =>{
    if(toggle)
      return 'lightgreen'
    else
      return 'white'
  }


  

  return (
    <div onClick={()=>{setToggle(!toggle)}} className='perCause' style={{backgroundColor:changeColor()}}>
      <h1>{props.vol.cause}</h1>
      {show()}
    </div>
  )
}