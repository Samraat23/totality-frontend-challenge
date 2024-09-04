import React, { useContext } from 'react'
import './Cartitem.css'
import { Housecontext } from '../Context/Housecontext'
import Cartview from '../Cartview/Cartview'
import Billing from '../../Pages/Billling/Billing'




function Cartitem() {
    const {cartItem,house} = useContext(Housecontext)
     
  return (
    <>
     <div className='selceted_product_detail'>
         <h3 className='card_pay'>Card & Payment Detail</h3>
        <div className='carddetailpage'>
        {house.map((item) =>{
            if(cartItem[item.id] > 0){
                return <div className='cartview_aligment'><Cartview data={item}/></div>          
            } 
        })}
        </div>
        <Billing/>
     </div>
    </>
  )
}

export default Cartitem
