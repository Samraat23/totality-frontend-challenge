import React, { useContext } from 'react'
import './Cartview.css'
import { Housecontext } from '../Context/Housecontext'
import remove from "../../assets/remove.png"

function Cartview({data}) {
    const{cartItem ,addcartitem,removecartitem,allremoveCartItem} = useContext(Housecontext)
      
  return (
    <>
     <div className='card_detail'>
         <div className='card_detail_left'>
            <div className="carditem_img">
                  <img src={data.imageLg} alt="productimg" className='product_view_img' /> 
            </div>
            <div className="carditem_detail">
                 <div className='product_name' >{data.name}</div>
                 <div className='product_price' > <b>Price : </b>{data.price}</div>
                 <div><b>Quantity :</b></div>
                    <div className='quantity_item'>
                       <div onClick={() =>addcartitem(data.id)} className='quantity_box_size'>+</div>
                       <div className='quantity_box'>{cartItem[data.id]}</div>
                       <div onClick={() => removecartitem(data.id)} className='quantity_box_size'>-</div>
                       <div onClick={() => allremoveCartItem(data.id)} ><img src={remove} alt="" className='removeicon' /></div>
                    </div>
                   <div className='product_total_amount' ><b>Amount : </b>{data.price*cartItem[data.id]}</div> 
             </div>
         </div>
     </div>
   
    </>


  )
}

export default Cartview
