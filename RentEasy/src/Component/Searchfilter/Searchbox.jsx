import React, { useContext } from 'react'
import './Searchbox.css'
import { Housecontext } from '../Context/Housecontext'


function Searchbox() {
       const
       {   area,
           price, 
           setPrice,
           areas, 
           setArea, 
           bed,
           setBed, 
           beds, 
           handleclick,
           amenities,
           setAmenities,
           amenitiesess,
     } = useContext(Housecontext)

       const prices = [
          {
               value : "100000 - 200000"
          },
          {
               value : "200000 - 300000"
          },
          {
              value : "300000 - 400000"
          }
          
       ]
  return (
    <>
    <div>
        <h1 className='find'>Find Your Ideal House</h1>
             <div className='searchbox'>
               <select 
                      name="location"
                      id="location" 
                      className='inputbox'
                      value={area}
                      onChange={(e)=> setArea(e.target.value)}
                      >
                 <option value="">Location</option>
                 {areas.map((area , index) =>{
                    return (
                    <option key={index} value={area}>
                       {area}
                    </option>)
                 })}
               </select>
          <select 
          name="bed" 
          className='inputbox'
          value={bed}
          onChange={(e) => setBed(e.target.value)}
          >
            <option value="">Bedrooms</option>
            {beds.map((bed,index) =>{
               return(
                    <option key={index} value={bed}>{bed}</option>
               )
            })}
          </select>

          <select 
          name="Price-range" 
          className='inputbox'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          >
            <option value="">Price Range</option>
              {prices.map((price , index) =>{
               return (
                  <option key={index}>
                    {price.value}
                  </option>
               )
              })}
          </select>

          <select 
          name="Amenities" 
          className='inputbox'
          value={amenities}
          onChange={(e) => setAmenities(e.target.value)}
          >
            <option value="" className='option'>Amenities</option>
              {amenitiesess.map(( amenities , index) =>{
               return (
                  <option key={index}>
                    {amenities}
                  </option>
               )
              })}
          </select>
          <button onClick={() => handleclick()} className='btn'>Search</button>
     </div>
     </div>
    </>
  )
}

export default Searchbox
