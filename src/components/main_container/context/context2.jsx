import { React, useState } from "react";
import s from './context.module.css'
import MyPostsContainer2 from "./posts/myPostsContainer2";
import ProfileInfoEditReduxForm from "./profile-info/ProfileInfoEditForm";
import ProfileInformation from "./profile-info/profileInfo";
import ProfilePhoto from "./profile-info/profilePhoto"



const Context2 = (props) => {

    const [editMode, changeEditMode] = useState(false)

    const toggleEditMode = () => {
        changeEditMode(!editMode)

    }

    const onSubmit = (formData) => {
        props.saveProfileInfo(formData);
    }


    return (
        <>
            <div className={s.context}>
                <ProfilePhoto {...props} />
                {editMode ?
                    <ProfileInfoEditReduxForm initialValues={props.state} {...props} isOwner={props.isOwner}
                        setNewPhoto={props.setNewPhoto} toggleEditMode={toggleEditMode} onSubmit={onSubmit} />
                    :
                    <ProfileInformation {...props} isOwner={props.isOwner}
                        setNewPhoto={props.setNewPhoto} toggleEditMode={toggleEditMode} />}

                <MyPostsContainer2 />
            </div>


        </>
    )

}

export default Context2