import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Housecontextprovider from './Component/Context/Housecontext.jsx'

createRoot(document.getElementById('root')).render(
  <Housecontextprovider>
  <StrictMode>
    <App />
  </StrictMode>
  </Housecontextprovider>
)
