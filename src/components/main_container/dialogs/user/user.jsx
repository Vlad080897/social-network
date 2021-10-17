import React from 'react'
import s from '../user/user.module.css'

const User = (props) => {

    return (
        <div className={s.name}>{props.name + '' + props.id} </div>
    )
}

export default User