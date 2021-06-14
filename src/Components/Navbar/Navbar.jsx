import React from 'react'
import {Nav,NavLink,NavMenu,Bars} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>RecipeWorld</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/" activestyles="true">HomePage</NavLink>
                    <NavLink to="/recipe" activestyles="true">Recipes</NavLink>
                    <NavLink to="/favorite" activestyles="true" >Favorites</NavLink>
                </NavMenu>
            </Nav>  
        </>
    )
}

export default Navbar;