import React from 'react'
import '../styles/All.css'
import City from './City';

export default function All(props) {


//Filtered Volunteer city
var filteredCityArr = []

const sortCities = () =>{
  filteredCityArr = props.volunteerArr.filter((val)=>{
    return val.vLucation === props.citySelect;
  })
}
sortCities()


//--------------------------//


//Shows all volunteer causes in the city
  return (
    <div className='filteredArr'>
      <h1>All volunteering places in: <span>{props.citySelect}</span></h1>
      {filteredCityArr.map((val,i)=>{
        return <City style={{border:'solid black 2px'}} index = {i} vol = {val}/>
      })}
      
    </div>
  )

}