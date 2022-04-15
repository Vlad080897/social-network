import React from "react"
import s from './profileInfo.module.css'
import StatusContainer2 from "../status/statusContainer2"
import { profileType } from "../../../../types/types"
import { useSelector } from "react-redux"
import { getProfilePageInfo } from "../../../../redux/selectors"



const ProfileInformation: React.FC<IPropsForProfileInformation> = ({ isOwner, toggleEditMode }) => {

    const profile = useSelector(getProfilePageInfo)

    return (
        <>
            <div className={s.container_profileInfo}>
                <div>{profile === null ? '' : <span className={s.name_of_user}> {profile.fullName} </span>}</div>
                <div>Мой статус: <StatusContainer2 /> </div>
                <div>Обо мне: {profile === null ? '' : profile.aboutMe}</div>
                <div> Рабочий статус: {profile === null ? '' : profile.lookingForAJob ? "В поиске работы" : 'Уже работаю'} </div>
                <div> Описание рабочего статуса: {profile && profile.lookingForAJobDescription} </div>
                <div>Contacts:
                    <div className={s.social_media_contacts}>{profile && profile.contacts && Object.entries(profile.contacts).map(([key, value]) => {
                        if (value) return <div>{<a href={value}>{key + '.com'}</a>} </div>
                    })}</div>
                </div>
                <div> {isOwner && <button onClick={toggleEditMode}>Edit Profile</button>} </div>
            </div>
        </>
    )
}

export default ProfileInformation

type IPropsForProfileInformation = {
    profile: profileType | null
    isOwner: boolean
    userId: number | undefined
    toggleEditMode: () => void
}
