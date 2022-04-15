import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import Textarea, { createField } from '../../../Controls/controls'
import { maxLength, requiredField } from '../../../utilits/validators/Validators'

const DialogsForm: React.FC<IPropsDialogsFrom> = (props) => {

    const addNewMassage = (values: DialogsFormDataType) => {
        props.addMassageThunk(values.massageText);
    }

    return (
        <DialogsReduxForm onSubmit={addNewMassage} />
    )

}

const maxMassageLenght = maxLength(100)

const DialogsFromContainer: React.FC<IPropsFormContainer & InjectedFormProps<DialogsFormDataType, IPropsFormContainer>> = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                {createField<propsOfDialogsFormDataType>(Textarea, 'text', 'massageText', 'text your massage...', [requiredField, maxMassageLenght])}
            </div>
            <div>
                <button>Send Massage</button>
            </div>

        </form>
    )
}

const DialogsReduxForm = reduxForm<DialogsFormDataType, IPropsFormContainer>({ form: 'dialogs' })(DialogsFromContainer)

export default DialogsForm

type DialogsFormDataType = {
    massageText: string
} // values that form will submit

type  propsOfDialogsFormDataType = keyof DialogsFormDataType // possible names of keys from DialogsFormDataType

type IPropsFormContainer = {

} // my own props for DialogsFormContainer

type IPropsDialogsFrom = {
    addMassageThunk: (value: string) => void
} // my own props for DialogsForm