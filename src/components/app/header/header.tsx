import React, { FC } from 'react'
import './header.css'
import logo from '../../img/twitter.png'
import { NavLink } from 'react-router-dom'
import { Button, Col, Row } from 'antd'

type PropsType = {
    login: string | null
    logoutThunk: () => void
}

const Header: FC<PropsType> = ({ login, logoutThunk }) => {

    return (
        <header>
            <Row>
                <Col span={18}>
                    <img src={logo} alt="logo" />
                </Col>
                <Col span={6}>
                    {login === null || login === undefined ? <NavLink to={'/login'} >Login</NavLink>
                        :
                        <Button onClick={logoutThunk}>Logout</Button>}
                </Col>

            </Row>
        </header >
    )
}

export default Header