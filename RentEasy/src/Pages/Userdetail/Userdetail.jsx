import React, { useContext, useState } from 'react'
import './Userdetail.css'
import { useNavigate } from 'react-router-dom';
import { Housecontext } from '../../Component/Context/Housecontext';

function Userdetail() {
 
   const {gettotlaitemincart,clearcart  }= useContext(Housecontext)


  const[formData , setFormData] = useState({
    fname:"",
    lname:"",
    number: '',
    address: '',
    code: '',
    state: '',
  })

  function validateForm(){
    let valid = true;
    if(formData.fname === ''){
      alert(`First Name is required and value is write only alphbetic letter`)
      valid = false;
    }
    if(formData.lname === ''){
      alert(`Last Name is required and value  is write only alphbetic letter`)
      valid = false;
    }
    if(formData.state === ''){
      alert(`State Name is required and value is write only alphbetic letter`)
      valid = false;
    }


    if(formData.address === ''){
      alert(`Address is required `)
      valid = false;
    }
    if(formData.code === ''){
      alert(`Pin code is required and value is write only Number`)
      valid = false;
    }
    return valid;
  }

   const Navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
       if (gettotlaitemincart() > 0) {
        clearcart();
             Navigate('/confirm')
            
       } else{
        Navigate('/cart')
       }
    }
    
  };
  return (
    <>
       <div className='user_form'>
      <form onSubmit={handleSubmit}>
      <div className='user_personal_detail'>
        <h3 style={{textAlign:'center', fontSize:"25px"}}>User Detail</h3>
        <label htmlFor="fname">First Name:</label><br />
        <input 
        type="text" 
        name="fname" 
        id="fname"
        value={formData.fname}
        onChange={(e) => setFormData(e.target.value)}
        required
         /><br /><br />

        <label htmlFor="lname">Last Name :</label><br />
        <input 
        type="text" 
        name="lname" 
        id="lname"
        value={formData.lname}
        onChange={(e) => setFormData(e.target.value)}
        required
        /><br /><br />
        <label htmlFor="phone">Phone Number</label><br />
        <input 
        type="text" 
        name="number" 
        id="phone"
        value={formData.number}
        onChange={(e) => setFormData(e.target.value)}
        required
         /> <br /><br /> 

        <label htmlFor="address">Address :</label><br />
        <input 
        type="text" 
        name="address" 
        id="address"
        value={formData.address}
        onChange={(e) => setFormData(e.target.value)} 
        required 
        /><br /><br />

        <label htmlFor="code">Pincode :</label><br />
        <input 
        type="Number" 
        name="code" 
        id="code"
        value={formData.code}
        onChange={(e) => setFormData(e.target.value)} 
        required
        /><br /><br />

        <label htmlFor="state">State :</label><br />
        <input 
        type="text" 
        name="state" 
        id="state"
        value={formData.state}
        onChange={(e) => setFormData(e.target.value)} 
        required
        /><br /><br />
        <button type="submit" className='sunmitted'>Confirm</button>
        </div>
      </form>
      </div>
   
    </>
  )
}

export default Userdetail