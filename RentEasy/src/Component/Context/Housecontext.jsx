import React, { createContext, useEffect, useState } from "react";
import housesData from "../../AllData/Data";


 export const Housecontext = createContext(null)

 function defaultcart () {
      let Cart = {};
      for(let i = 0; i < housesData.length + 1 ; i++){
        Cart[i] = 0;
      }
      return Cart;
      
 }

 const Housecontextprovider = ({children}) =>{
    const [house , setHouse] = useState(housesData)
    const[area , setArea] = useState('location (any)')
    const[areas , setAreas] = useState([]);
    const[amenities , setAmenities] = useState('Amenties(any)')
    const[amenitiesess , setAmenitiesess] = useState( [])
    const[price , setPrice] = useState('price range(any)')
    const [bed , setBed] = useState('Bedroom(any)')
    const [beds , setBeds] = useState([])
    const[loading , setLoading] = useState(false);
    const[cartItem , setCartItem] = useState(defaultcart())

   useEffect(()=>{
     const Allarea= house.map((house) =>{
        return(
            house.location
        )
     })
     const uniquearea = [...new Set(Allarea)] 
     setAreas(uniquearea) ;
   },[])
   //bedroom map
   useEffect(()=>{
     const bedroom= house.map((bed)=>{
         return(
            bed.bedrooms
         )
    })
    const Numberofbed = [...new Set(bedroom)].sort()
    setBeds(Numberofbed)
   },[])

   //Ameties
   useEffect(()=>{
    const Allameties = house.map((house) =>{
        return (
            house.amenities
        )
    })
     const Numberofameties = [...new Set(Allameties)].sort()
      setAmenitiesess(Numberofameties);
   },[])

   const handleclick = () =>{
     const isDefault = (str) =>{
               return str;
     }


     const Minprice = price.split(" ")[0]
     
     const Maxprice =price.split(" ")[2]
    
     const newhouse = housesData.filter((house) =>{
         const houseprice = house.price

        if(house.location == area){
          return house;
        }

        if(house.amenities === amenities){
          return house;
        }
        if(house.bedrooms === bed){
          return house;
        }
        if(houseprice >= Minprice && houseprice <= Maxprice){
          return house
        }

        // if((isDefault(area) == house.location) && (isDefault(bed) == house.bedrooms)){
        //   return house
        // }


        //if all input are match then result out

       if(house.location === area &&
          house.bedrooms === bed &&
          house.amenities === amenities &&
          houseprice >= Minprice && houseprice <= Maxprice
       )
       {
         return house;
       }
     })
      
    console.log(newhouse)
    setHouse(newhouse) 
    return newhouse  
   }

   const addcartitem = (itemId) =>{
        setCartItem((prev) =>({...prev,[itemId]:prev[itemId]+1}))
        
   }

   const removecartitem = (itemId) =>{
          setCartItem((prev) =>({...prev,[itemId]:prev[itemId]-1}))
   }

   const gettotalcartamount = () =>{
    let totalamount = 0;
     
    for(let item in cartItem){
      if(cartItem[item] > 0){
            let cartinfoitem = housesData.find((product)=> product.id === Number(item))
            totalamount+= cartinfoitem.price * cartItem[item];
      }
     
    }
    return totalamount; 
   }

   const gettotlaitemincart =() =>{
    let totalitemincart = 0;
    for(let item in cartItem){
      if(cartItem[item] > 0){
        totalitemincart+= cartItem[item]
      }
    }
    return totalitemincart;
   }

   const clearcart = () =>{
    setCartItem([]);
   }

   const allremoveCartItem = (item) => {
    setCartItem(prevCartItems => {
      const newCartItems = { ...prevCartItems };
      delete newCartItems[item];
      return newCartItems;
    });
  };


     

    return(
        <Housecontext.Provider 
        value={{
            house,housesData,
            handleclick,
            amenities , setAmenities,amenitiesess,
            setHouse,bed,beds,setBed,setBeds,
            area,setArea,areas,setAreas,price,setPrice,bed,setBed,loading,setLoading,
            cartItem,addcartitem,removecartitem,gettotalcartamount,gettotlaitemincart,
            setCartItem,clearcart,allremoveCartItem,
        }}>
             {children}
        </Housecontext.Provider> 
    )
 }
 export default Housecontextprovider;