import React from 'react'
import s from '../massages/massages.module.css'

const Massages = (props) => {
    return (
        <div className={s.text}>{props.massages}</div>
    )
}

export default Massages