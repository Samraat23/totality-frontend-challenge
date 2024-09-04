import React, { useContext } from 'react'
import { Housecontext } from '../Context/Housecontext'
import { Link } from 'react-router-dom'
import House from '../House/House'
import './Houselisting.css'

function Houselisting() {
   const{house} =  useContext(Housecontext)
  return (
    <>
    <div className='flex'>
       {house.map((house , index) =>{
        return (
            <Link to={`/property/${house.id}`} key={index} className="link" >
               <House data={house}/>
            </Link>
        )
       })}
    </div>
    </>
  )
}

export default Houselisting
