import React from 'react'
import s from '../dialogs/dialogs.module.css'
import DialogsForm from './dialogsForm';
import Massages from './massages/massages';
import User from './user/user';


const Dialogs = (props) => {
    
    let massageElements = props.state.massages.map(el => <Massages massages={el.massages}></Massages>)
    let dialogsElemetns = props.state.dialogs.map(el => <User name={el.name} id={el.id}></User>);

    return (
        <>
            <div className={s.users}>
                {dialogsElemetns}
            </div>
            <div className={s.massages}>
                {massageElements}
            </div>
            <DialogsForm addMassageThunk={props.addMassageThunk} />
        </>
    )
}

export default Dialogs