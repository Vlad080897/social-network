import React from "react"
import userWithoutPhoto2 from '../../../img/images.png'
import profileInfoStyles from './profileInformation.module.css'
import StatusContainer2 from "../status/statusContainer2"
import StatusContainerHooks from "../status/StatusContainerHooks"

const ProfileInformation = (props) => {
    return (
        <>
            {props.state === null ? <img className={profileInfoStyles.user_main_photo} src={userWithoutPhoto2} /> :
                props.state.photos.large === null ? <img className={profileInfoStyles.user_main_photo} src={userWithoutPhoto2} /> : <img className={profileInfoStyles.user_main_photo} src={props.state.photos.large} />}
            <div className={profileInfoStyles.container_profileInfo}>
                <div className={profileInfoStyles.profile_description}>{props.state === null ? '' : <span className={profileInfoStyles.name_of_user}> {props.state.fullName} </span>}</div>
                <div className={profileInfoStyles.profile_description}>Мой статус: <StatusContainer2 {...props} /> </div>
                <div className={profileInfoStyles.profile_description}>Обо мне: {props.state === null ? '' : props.state.aboutMe}</div>
                <div className={profileInfoStyles.profile_description}> Рабочий статус: {props.state === null ? '' : props.state.lookingForAJob ? "В поиске работы" : 'Уже работаю'} </div>
                <div className={profileInfoStyles.profile_description}> Описание рабочего статуса: {props.state === null ? '' : props.state.lookingForAJob ? props.state.lookingForAJobDescription : <span>Отсутствует</span>} </div>
            </div>
        </>
    )
}

export default ProfileInformation