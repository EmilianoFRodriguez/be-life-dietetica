import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss'
import NavBar from './components/NavBar/index'
import Footer from './components/Footer/index'
import ItemListContainer from './components/ItemListContainer/index';
import ItemDetailContainer from './components/ItemDetailContainer/index';
import QuienesSomos from './components/QuienesSomos/index';

export default function App() {

  return (
    <div className='mainContainer'>
      <BrowserRouter>
        <NavBar />
        <div className='main'>
          <Routes>
            <Route path='/' element={<h1>HOME</h1>} />
            <Route path='/productos' element={<div><ItemListContainer /></div>} />
            <Route path='/detalle/:idProduct' element={<div><ItemDetailContainer /></div>} />
            <Route path='/quienessomos' element={<div><QuienesSomos /></div>}/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
