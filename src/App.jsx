import React from 'react'
import './App.scss'
import NavBar from './components/navbar'
import Footer from './components/Footer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

export default function App() {

  return (
    <div className='mainContainer'>
      <NavBar />
      <div className='main'>
        <ItemListContainer />
      </div>
      <Footer />
    </div>
  )
}
