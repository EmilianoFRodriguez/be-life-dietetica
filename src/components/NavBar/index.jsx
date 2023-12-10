import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import CartWidget from '../CartWidget';

export default function NavBar() {

    return (
        <div className="containerNav">
            <nav className="navBar">
                <div className="navLogo">
                    <Link to="/" className="linkLogo">
                        <img
                            src="https://i.ibb.co/f0Hx03n/be-life-logo.jpg" alt="Logo-BeLife" className='logo'
                        />
                    </Link>
                </div>
                <ul className="navList">
                    <li className="navItem">
                        <Link to="/" className="">Inicio</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/productos" className="">Productos</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/category/sintacc" className="">Sin TACC</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/category/veggie" className="">Veggies</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/category/suplementos" className="">Suplementos</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/quienessomos" className="">Quienes Somos</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/contacto" className="">Contacto</Link>
                    </li>
                </ul>
                <Link to="/cart"><CartWidget /></Link>
            </nav>
        </div>)
}