import React, { ChangeEvent } from "react"
import { useDispatch } from "react-redux"
import { setNewPhoto } from "../../../../redux/profilePageReducer2"
import { profileType } from "../../../../types/types"
import userWithoutPhoto2 from '../../../img/images.png'
import photoIcon from '../../../img/photo_icon.png'
import s from './profileInfo.module.css'

export const ProfilePhoto: React.FC<IPropsForProfilePhoto> = React.memo((props) => {

    const dispatch = useDispatch()

    const photoChanged = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files) {
            dispatch(setNewPhoto(e.currentTarget.files[0]))
        }

    }

    return (
        <>
            <div className={s.userPhoto_container}>

                {props.profile === null ?
                    <img className={s.user_main_photo} src={userWithoutPhoto2} />
                    :
                    <img className={s.user_main_photo} src={props.profile.photos === null ? undefined : props.profile.photos.large ? props.profile.photos.large : userWithoutPhoto2} />}

                {props.isOwner &&
                    <div className={s.btn_new_photo}>
                        <div>
                            <img src={photoIcon} alt="photoIconError" />
                            <input type='file' onChange={(e) => photoChanged(e)} />
                        </div>
                    </div>}
            </div>
        </>
    )
})



type IPropsForProfilePhoto = {
    isOwner: boolean
    profile: profileType | null
}