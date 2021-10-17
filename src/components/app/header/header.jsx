import React from 'react'
import './header.css'
import logo from '../../img/twitter.png'
import { NavLink } from 'react-router-dom'

const Header = (props) => {

    return (
        <header>
            <img src={logo} alt="logo" />
            <div>{props.state.login === null || props.state.login === undefined ? <NavLink to={'/login'} >Login</NavLink>
                :
                <div>
                    {props.state.login} - 
                    <button onClick={props.logoutThunk}>Logout</button>
                </div>
            }</div>

        </header >
    )
}

export default Header