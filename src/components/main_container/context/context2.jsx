import React from "react";
import BgPhoto from "./bg-photo/BgPhoto";
import s from './context.module.css'
import MyPosts2 from "./posts/myPosts2";
import MyPostsContainer2 from "./posts/myPostsContainer2";
import ProfileInfo from "./profile-info/profileInfo";
import ProfileInformation from "./profile-info/profileInformation";


const Context2 = (props) => {
    return (
        <>
            <div className={s.context}>
                <ProfileInformation {...props} />
                <MyPostsContainer2 />
            </div>

        </>
    )

}

export default Context2