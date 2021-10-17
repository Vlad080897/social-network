import React from 'react'
import s from '../context/context.module.css'
import ProfileInfo from './profile-info/profileInfo'
import BgPhoto from './bg-photo/BgPhoto'
import MyPostsContainer from './posts/myPostsContainer'
import StatusContainerHooks from './status/StatusContainerHooks'



const Context =  (props) => {
    
    return (
        <div className={s.context}>
            <BgPhoto></BgPhoto>
            <ProfileInfo profile={props.profile} ></ProfileInfo>
            <StatusContainerHooks status={props.status} updateStatus={props.updateStatus} />
            <MyPostsContainer newPostText={props.newPostText} dispatch={props.dispatch} postText={props.postText} />

        </div>
    )
}
export default Context

