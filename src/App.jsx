import './App.css'
import Products from './Components/Products/Products'
import ProductInfo from './Components/Products/ProductInfo'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/products/:id' element={<ProductInfo/>}/>
      </Routes>
    </>
  )
}

export default App
