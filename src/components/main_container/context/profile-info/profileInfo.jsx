import React from 'react'
import profilePhoto from '../../../img/twitter.png'
import s from '../profile-info/profile_info.module.css'

const ProfileInfo = (props) => {
    
    return (
        <div className={s.profile_info}>
            {props.profile === null ? <img src={profilePhoto} alt="" /> : <img src={props.profile.photos.small} alt="" />}
            <ul>
                <li>{props.profile === null ? '' : props.profile.fullName}</li>
                <li>Date of Birth: 2 january</li>
                <li>City: Minsk</li>
                <li>Education: BSU '11 </li>
            </ul>
        </div>
    )
}
export default ProfileInfo