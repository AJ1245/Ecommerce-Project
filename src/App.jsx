import './App.css'
import { HomePage } from './pages/HomePage.jsx'
import { CheckOutPage } from './pages/CheckOutPage.jsx'
import { Routes,Route } from 'react-router'

function App() {
  return (
    <Routes>
      <Route path='/' element={ <HomePage /> }> </Route>
      <Route path='checkout' element={<CheckOutPage />}> </Route>
    </Routes>
  )
}

export default App
