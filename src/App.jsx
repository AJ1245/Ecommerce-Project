import './App.css'
import { HomePage } from './pages/HomePage.jsx'
import { CheckOutPage } from './pages/CheckOutPage.jsx'
import {OrdersPage} from './pages/OrdersPage.jsx'
import { TrackingPage } from './pages/TrackingPage.jsx'
import { Routes,Route } from 'react-router'

function App() {
  return (
    <Routes>
      <Route path='/' element={ <HomePage /> }> </Route>
      <Route path='checkout' element={<CheckOutPage />}> </Route>
      <Route path='orders' element={<OrdersPage />}> </Route>
      <Route path='tracking' element={<TrackingPage />}> </Route>
    </Routes>
  )
}

export default App
