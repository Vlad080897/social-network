import React from 'react'
import { NavLink } from 'react-router-dom'
import s from '../navigation/navigation.module.css'


const Navigation = () => {
    return (
        <div className={s.nav}>
            <ul>
                <NavLink to="/profile" className={s.active}><li>Profile</li></NavLink>
                <NavLink to="/dialogs" className={s.active}><li>Messages</li></NavLink>
                <NavLink to='/news' className={s.active}><li>News</li></NavLink>
                <NavLink to='/music' className={s.active}><li>Music</li></NavLink>
                <NavLink to='/settings' className={s.active}><li>Settings</li></NavLink>
                <NavLink to='/friends' className={s.active} ><li>Friends</li></NavLink>
                <NavLink to='/users'  className={s.active}><li>Users</li></NavLink>
                

                
            </ul>
        </div>
    )
}

export default Navigation