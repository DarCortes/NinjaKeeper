import React from 'react';

import { Link, NavLink } from 'react-router-dom';

import logo from "./../../assets/IMG/logoGatito.png";

import './MainHeader.scss';

const MainHeader = () => {
    return (
        <header className="MainHeader">

            <div className="Logo">
                <Link to="/">
                    <img src={logo} alt="Logo de un gatito" height="50px"/>

                    <h5>Ninja Keeper</h5>
                </Link>
                
            </div>
            <nav>

                <ul>
                    <li>
                        <NavLink to="/beneficios">Beneficios</NavLink> |
                    </li>
                    <li>
                        <NavLink to="/estaciones">Estaciones</NavLink> |
                    </li>
                    <li>
                        <NavLink to="/pagos">NinjaPay</NavLink> |
                    </li>
                    <li>
                        <NavLink to="/ayuda">Ayuda</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader;