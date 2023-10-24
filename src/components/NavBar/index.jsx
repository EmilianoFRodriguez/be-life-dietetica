import React from 'react'
import './style.scss'
import CartWidget from '../CartWidget'

export default function NavBar() {

    return (
        <div className="containerNav">
            <nav className="navBar">
                <div className="navLogo">
                    <a href="#" className="linkLogo">
                        <img
                            src="https://i.ibb.co/f0Hx03n/be-life-logo.jpg" alt="Logo-BeLife" className='logo'
                        />
                    </a>
                </div>
                <ul className="navList">
                    <li className="navItem">
                        <a href="#" className="">Inicio</a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="">Productos</a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="">Sin TACC</a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="">Veggies</a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="">Suplementos</a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="">Quienes Somos</a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="">Contacto</a>
                    </li>
                </ul>
                <a href="#"><CartWidget /></a>
            </nav>
        </div>)
}