import React from "react"
import s from './profileInfo.module.css'
import StatusContainer2 from "../status/statusContainer2"


const ProfileInformation = (props) => {
    return (
        <>
            <div className={s.container_profileInfo}>
                <div>{props.state === null ? '' : <span className={s.name_of_user}> {props.state.fullName} </span>}</div>
                <div>Мой статус: <StatusContainer2 {...props} /> </div>
                <div>Обо мне: {props.state === null ? '' : props.state.aboutMe}</div>
                <div> Рабочий статус: {props.state === null ? '' : props.state.lookingForAJob ? "В поиске работы" : 'Уже работаю'} </div>
                <div> Описание рабочего статуса: {props.state && props.state.lookingForAJobDescription} </div>
                <div>Contacts:
                    <div className={s.social_media_contacts}>{props.state && Object.entries(props.state.contacts).map(([key, value]) => {
                        if (value) return <div>{<a href={value}>{key + '.com'}</a>} </div>
                    })}</div>
                </div>
                <div> {props.isOwner && <button onClick={props.toggleEditMode}>Edit Profile</button>} </div>
            </div>
        </>
    )
}

export default ProfileInformation