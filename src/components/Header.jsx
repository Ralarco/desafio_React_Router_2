import React from 'react'
import { NavLink } from "react-router-dom";
import { Row as Nav, Col } from 'react-bootstrap';
import PokeLogo from "../images/pokelogo.png"

const Header = () => {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");
    return (
        <>
        <Nav className='barraNav justify-content-between p-4' >
                <Col xs={1}>
                    <img src={ PokeLogo } alt="logo APP" />
                </Col>

                <Col xs={10} className='justify-content-end text-end'>
                    <NavLink className={ setActiveClass } to="/">Home</NavLink>
                    { " - " }
                    <NavLink className={ setActiveClass } to="/Pokemones">Pokemones</NavLink>
                </Col>
        </Nav>
        </>
    )
}

export default Header