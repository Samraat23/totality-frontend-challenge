import Navbar from "./Component/Navbar/Navbar"
import Footer from "./Component/Footer/Footer"
import { BrowserRouter as Router , Routes,Route } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Propertylist from "./Pages/Properttdetail/Propertylist"
import Cartitem from "./Component/Cart/Cartitem"
import Userdetail from "./Pages/Userdetail/Userdetail"
import Confirm from "./Component/Confirmorder/Confirm"



function App() {
  return (
    <>
    <Router>
    <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="Property/:PropertylistId" element={<Propertylist/>}/>
       <Route path="/cart" element={<Cartitem/>}/>
       <Route path="/confirm" element={<Confirm/>}/>
       <Route path="/userdetail" element={<Userdetail/>}/>
     </Routes>
     <Footer />
     </Router>
  
    </>
  )
}

export default App
