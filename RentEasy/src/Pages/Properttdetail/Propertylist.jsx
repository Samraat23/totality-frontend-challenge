import './Propertylist.css'
import housesData from '../../AllData/Data'
import { Link, useParams } from 'react-router-dom'
import start_icon from '../../assets/star_icon.png'
import start_haf from '../../assets/star_dull_icon.png'
import location from '../../assets/location.png'
import { useContext } from 'react'
import { Housecontext } from '../../Component/Context/Housecontext'


function Propertylist() {
    const{PropertylistId} = useParams()
     const {addcartitem} = useContext(Housecontext)
     
    const house = housesData.find((house) =>{
            return (house.id == (PropertylistId))
    })
  return (
    <>
    <div className='proper'>
     <div className='left_div'>
      <img src={house.imageLg} alt="image" className='img_homelg'  />
     </div>
     <div className='right_div'>
           <div className='top'>
           <div className='house_name'>{house.name}</div>
           <div className='house_location'>{house.location}</div>
           </div>
           <div className='center'>
            <div className='loction_content'>
            <img src={location} alt="" className='img_loc' />
            <p className='house_address'>{house.address}</p>
            </div>
            <div className="product_rev_start">
           <div className="review_start">
              <img src={start_icon} alt="" />
             <img src={start_icon}  alt="" />
              <img src={start_icon}  alt="" />
              <img src={start_icon}  alt="" />
              <img src={start_haf} alt="" />
           </div>
             <div className="total_review">
                 <p>(122)</p>
              </div>
        </div>
            <h2> Price : {house.price}</h2>
           </div>
           <div className='facility'>
            <div>Bedrooms : {house.bedrooms}</div>
            <div> Bathrooms : {house.bathrooms}</div>
            <div> Surface Area : {house.surface}</div>
            <div> Amenities : {house.amenities}</div>
            <div className='agent_name'>Agent Name : {house.agent.name}</div>
           </div>
           <div className='bottomt'>
                 <div className='add2cart' onClick={() => {addcartitem(house.id)}}>Add to Cart</div>
                
           </div> 
     </div>
    </div>
    </>
  )
}

export default Propertylist

