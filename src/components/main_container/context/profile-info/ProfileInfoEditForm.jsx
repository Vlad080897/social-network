import React from "react"
import { Field, reduxForm } from 'redux-form'
import s from './profileInfo.module.css'
import StatusContainer2 from "../status/statusContainer2"
import Textarea, { Input } from '../../../../Controls/controls'
import { requiredField, maxLength } from "../../../../utilits/validators/Validators"
import { useState } from "react"


const maxLengthForName = maxLength(20);
const maxLengthForJobDescription = maxLength(100)

const ProfileInfoEditForm = (props) => {
    debugger

    const [btnActive, changeBtnActive] = useState(false)

    const onChange = (e) => {
        if (e.currentTarget.value.length <= 0) {
            changeBtnActive(true)
        } else {
            changeBtnActive(false)
        }
    }
    return (
        <form className={s.container_profileInfo} onSubmit={props.handleSubmit}>

            <div> <Field onChange={onChange} placeholder='New Name' component={Input} type='text' name='fullName'
                validate={[requiredField, maxLengthForName]} setCurrentError={props.setCurrentError} /></div>

            <div> Мой статус: <StatusContainer2 {...props} /> </div>

            <div> <Field onChange={onChange} placeholder='About me' component={Input} type='text' name='aboutMe'
                validate={[requiredField]} /></div>

            <div> Are you looking for a job now:<Field component={Input} type='checkbox' name='lookingForAJob' validate={[]} /></div>

            <div> <Field onChange={onChange} placeholder='lookingForAJobDescription' component={Textarea} type='text'
                name='lookingForAJobDescription' validate={[requiredField, maxLengthForJobDescription]} setCurrentError={props.setCurrentError} /></div>

            <div>Contacts:
                {props.error && <div className={s.social_media_contacts_error}> {props.error} </div>}
                <div className={s.social_media_contacts}>{props.state && Object.keys(props.state.contacts).map(key => {
                    return (
                        <>
                            <div>{key}</div>
                            <Field component={Input} name={`contacts.${key}`} type={'text'} validate={[]} />
                        </>
                    )
                })}</div>
                {props.isOwner && <button disabled={btnActive} type="button" onClick={props.toggleEditMode}>Confirm Cahges</button>}
                {props.isOwner && <button disabled={btnActive} type="submit">Save</button>}
            </div>

        </form >
    )
}

const ProfileInfoEditReduxForm = reduxForm({
    form: 'editProfile'
})(ProfileInfoEditForm)



export default ProfileInfoEditReduxForm