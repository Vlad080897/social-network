import React from "react";
import { connect } from "react-redux";
import MyPosts2 from "./myPosts2";
import { addPost } from "../../../../redux/profilePageReducer2";
import postImage from '../../../img/images.png'
import s from './my-posts.module.css'
import { AppStateType } from "../../../../redux/redux-store";
import { PhotosType, PostType } from "../../../../types/types";

type StatePropsType = {
    photos: PhotosType 
    posts: Array<PostType> 
}

type DispatchPropsType = {
    addPost: (postMassage?: string) => void
}

const MyPostsContainer2: React.FC<StatePropsType & DispatchPropsType> = ({ posts, photos, addPost }) => {

    const addNewPost = (postMassage?: string) => {
        addPost(postMassage)
    }

    const allPosts = posts.map((post) => {
        return (
            <>
                <div className={s.my_posts}>
                    <div>{photos.small ? <img src={photos.small} className={s.post_photo} /> : <img src={postImage} className={s.post_photo} />}</div>
                    <div>{post.text}</div>
                </div>

            </>
        )
    })

    return (
        <div className={s.my_post_container}>
            <MyPosts2 addNewPost={addNewPost} />
            <div>{allPosts}</div>

        </div>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage2.posts,
        photos: state.profilePage2.profile?.photos
    }

}

// @ts-ignore 
export default connect(mapStateToProps, { addPost })(MyPostsContainer2)