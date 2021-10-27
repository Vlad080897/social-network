import React from 'react'
import s from '../dialogs/dialogs.module.css'
import DialogsForm from './dialogsForm';
import Massages from './massages';
import User from './user';



const Dialogs = (props) => {
    let massageElements = props.massages.map((el, index) => {
        return <Massages key={index} massage={el.massages}></Massages>
    })

    let dialogsElemetns = props.users.map(el => <User key={el.id} name={el.name} id={el.id}></User>);

    return (
        <>
            <div className={s.users}>
                {dialogsElemetns}
            </div>
            <div className={s.massages}>
                {massageElements}
                <DialogsForm addMassageThunk={props.addMassageThunk} />
            </div>

        </>
    )
}

export default Dialogs