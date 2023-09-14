import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import ItemListContainer from './components/navbar/itemlistcontainer/ItemListContainer'






function App() {
const greeting = "bienvenidos"
 return (
    <>
      <Navbar />  
      <ItemListContainer greeting={greeting} />
     
    </>
  )
}

export default App
