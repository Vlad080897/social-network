import React from 'react'
import s from './setting.module.css'

const Settings = (props) => {
    debugger
    return (
        <div className={s.container_settings}>
            <div>Full name: {props.profileInfo && props.profileInfo.fullName}</div>
            <div>About me: </div>
            <div>Working status:{props.profileInfo && props.profileInfo.lookingForAJob} </div>
            <div>Description of my skills: {props.profileInfo && props.profileInfo.lookingForAJobDescription}</div>
            <div>Contacts:
                <div className={s.social_media_contacts}>{props.profileInfo && Object.keys(props.profileInfo.contacts).map(key => <div>{key}</div>)}</div>
            </div>
        </div>
    )
}

export default Settings