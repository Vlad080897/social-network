import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Textarea from '../../../Controls/controls'
import { maxLength, requiredField } from '../../../utilits/validators/Validators'

const DialogsForm = (props) => {
    
    const addNewMassage = (values) => {
        props.addMassageThunk(values.text);
    }

    return (
        <DialogsReduxForm onSubmit={addNewMassage} />
    )

}

const maxMassageLenght = maxLength(100)

const DialogsFromContainer = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="text" placeholder="text your massage" validate={requiredField, maxMassageLenght} />
            </div>
            <div>
                <button>Send Massage</button>
            </div>

        </form>
    )
}

const DialogsReduxForm = reduxForm({ form: 'dialogs' })(DialogsFromContainer)

export default DialogsForm