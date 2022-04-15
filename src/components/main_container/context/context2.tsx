import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveProfileInfo } from "../../../redux/profilePageReducer2";
import { getIsLogged, getProfileLoader, getProfilePageInfo } from "../../../redux/selectors";
import { profileType } from "../../../types/types";
import Loader from "../../app/loader/loader";
import Login from "../login/login";
import s from './context.module.css';
import MyPostsContainer2 from "./posts/myPostsContainer2";
import ProfileInformation from "./profile-info/profileInfo";
import ProfileInfoEditReduxForm from "./profile-info/ProfileInfoEditForm";
import { ProfilePhoto } from "./profile-info/profilePhoto";



const Context2: React.FC<IPropsContext2> = (props) => {

    const [editMode, changeEditMode] = useState(false)

    const profile = useSelector(getProfilePageInfo)
    const profileLoader = useSelector(getProfileLoader)
    const dispatch = useDispatch()
    const isLogged = useSelector(getIsLogged)

    const toggleEditMode = () => {
        changeEditMode(!editMode)
    }

    const onDataSend = (formData: profileType): void => {
        dispatch(saveProfileInfo(formData))
    }

    if (!isLogged) {
        return <Login />
    }

    return (
        <>
            {profileLoader ? <Loader isLoading={true} /> :

                <div className={s.context}>
                    <ProfilePhoto isOwner={props.isOwner} profile={profile} />
                    {editMode ?
                        <ProfileInfoEditReduxForm initialValues={profile} profile={profile} isOwner={props.isOwner}
                            toggleEditMode={toggleEditMode} onSubmit={onDataSend} />
                        :
                        <ProfileInformation profile={profile} isOwner={props.isOwner}
                            toggleEditMode={toggleEditMode} userId={props.userId} />}

                    <MyPostsContainer2 />
                </div>

            }
        </>
    )

}



export default Context2

type IPropsContext2 = {
    isOwner: boolean
    userId: number | undefined
}

export type FormDataTypeForContext = {
    formData: profileType
}

