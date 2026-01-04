import './App.css'
import { HomePage } from './pages/HomePage.jsx'
import { CheckOutPage } from './pages/CheckOutPage.jsx'
import {OrdersPage} from './pages/OrdersPage.jsx'
import { TrackingPage } from './pages/TrackingPage.jsx'
import { Routes,Route } from 'react-router'
import { useState, useEffect } from 'react'
import axios from "axios";

function App() {

  const [cart, setCart]=useState([]);

  useEffect(()=>{
   axios.get('/api/cart-items?expand=product')
    .then((response)=>{
      setCart(response.data);
    })
      },[]); 

  return (
    <Routes> 
      <Route path='/' element={ <HomePage  cart={cart} /> }> </Route>
      <Route path='checkout' element={<CheckOutPage  cart={cart} />}> </Route>
      <Route path='orders' element={<OrdersPage  cart={cart} />}> </Route>
      <Route path='tracking' element={<TrackingPage />}> </Route>
    </Routes>
  )
}

export default App
