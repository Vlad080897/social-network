import React from "react"
import userWithoutPhoto2 from '../../../img/images.png'
import photoIcon from '../../../img/photo_icon.png'
import s from './profileInfo.module.css'

const ProfilePhoto = (props) => {

    const photoChanged = (e) => {
        props.setNewPhoto(e);
    }

    return (
        <>
            <div className={s.userPhoto_container}>

                {props.state === null ?
                    <img className={s.user_main_photo} src={userWithoutPhoto2} />
                    :
                    props.state.photos.large === null ?
                        <img className={s.user_main_photo} src={userWithoutPhoto2} />
                        :
                        <img className={s.user_main_photo} src={props.state.photos.large} />}

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
}

export default ProfilePhoto