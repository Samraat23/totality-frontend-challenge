import React from 'react'
import './House.css'
import bed from '../../assets/Bed.png'
import bathroom from '../../assets/bathroom.png'


function House({data}) {

    const {
        imageLg , 
        location , 
        address , 
        bedrooms ,
        bathrooms, 
        amenities, 
        price,
           } = data
  return (
    <>

    <div className='flex_direction'>
    <div className="porudct_box">
       <div className='image_box'>
           <img src={imageLg} alt="house1" className='house_img' />
       </div>
       <div className='content_box'>
         <div className='Home_loction'>
            <h2>{location}</h2>
            <p>{address}</p>
         </div>
         <div className='middle'>
             <div className='bedroom'>
               <img src={bed} alt="" className='feature' />
               <p >{bedrooms}</p>
             </div>
             <div className='bedroom'>
             <img src={bathroom} alt=""className='feature' />
             <p>{bathrooms}</p>
             </div>
             <div className='bedroom'>
             <p>{amenities}</p>
             </div>
         </div>
       </div>
       <div className='bottom'>
         <h4>{price}</h4>
         <button>Book Now</button>
       </div>
    </div>
   </div>
   </>
  )
}

export default House
