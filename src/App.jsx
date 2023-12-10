import './App.scss'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/index'
import Footer from './components/Footer/index'
import ItemListContainer from './components/ItemListContainer/index';
import ItemDetailContainer from './components/ItemDetailContainer/index';
import QuienesSomos from './components/QuienesSomos/index';
import CartContainer from './components/CartContainer';
import { CartContextProvider } from './context/cartContext';
import { exportData } from './firebase/firestoreExportData';

export default function App() {

  return (
    <div className='mainContainer'>
      <CartContextProvider>
        <BrowserRouter>
          {/* <button onClick={ exportData }>Exportar productos</button> */}
          <NavBar />
          <div className='main'>
            <Routes>
              <Route path='/' element={<h1>HOME</h1>} />
              <Route path='*' element={<h1>Esta pagina no existe</h1>} />
              <Route path='/productos' element={<div><ItemListContainer /></div>} />
              <Route path='/detalle/:idProduct' element={<div><ItemDetailContainer /></div>} />
              <Route path='/category/:idCategory' element={<div><ItemListContainer /></div>} />
              <Route path='/quienessomos' element={<div><QuienesSomos /></div>} />
              <Route path='/cart' element={<div><CartContainer /></div>} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  )
}
