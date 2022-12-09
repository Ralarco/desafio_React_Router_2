import React from 'react'
import { NavLink } from "react-router-dom";
import { Row as Nav, Col } from 'react-bootstrap';
const Header = () => {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");
    return (
        <>
        <Nav className='bg-light'>
            <Col>
            </Col>

            <Col>
                <NavLink className={ setActiveClass } to="/">Home</NavLink>
                { " - " }
                <NavLink className={ setActiveClass } to="/pokemones">Pokemones</NavLink>
            </Col>
        </Nav>
        </>
    )
}

export default Header