import React, { useContext } from 'react'
import './Billing.css'
import { Housecontext} from '../../Component/Context/Housecontext'
import { useNavigate } from 'react-router-dom'

function Billing() {
      const{gettotlaitemincart,gettotalcartamount}= useContext(Housecontext)
      const Navigate = useNavigate()

    const checkout = () =>{
        Navigate('/userdetail')
    }
  return (
    <div className='bill'>
    <div className='billing'>
      <h1 className='bill_amnt'>Billing Amount</h1>
      <p className='Bill_quanty'>Total Quantity : {gettotlaitemincart()}</p>
      <p className='Bill_quanty'>Total Pay Amount : {gettotalcartamount()} </p>
      <button className='checkout' onClick={() => checkout()}>Check out Process</button>
    </div>
    </div>
  )
}

export default Billing
