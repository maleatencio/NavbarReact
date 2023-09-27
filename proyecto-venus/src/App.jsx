import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import ItemListContainer from './components/navbar/itemlistcontainer/ItemListContainer'
import Categories from './components/categories/Categories'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductList from './components/products/ProductList'
import CategoriesProductList from './components/categories/CategoriesProductList'






function App() {

 return (
    <>
     <Router>
      <Navbar/>
      <Routes>
        <Route exact path= '/' element={<Categories/>} />
        <Route exact path = "/products" element={<ProductList/>} />
        <Route exact path= "/categoria/:categoriaId" element ={<CategoriesProductList />} />
      </Routes>
     </Router>
      
    </>
  )
}

export default App
