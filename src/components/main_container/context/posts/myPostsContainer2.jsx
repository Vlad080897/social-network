import React from "react";
import { connect } from "react-redux";
import MyPosts2 from "./myPosts2";
import { addPost } from "../../../../redux/profilePageReducer2";
import postImage from '../../../img/images.png'
import s from './my-posts.module.css'

const MyPostsContainer2 = (props) => {

    const addPost = (postMassage) => {
        props.addPost(postMassage)
    }

    const allPosts = props.state.posts.map((post) => {
        return (
            <>
                <div className={s.my_posts}>
                    <div>{props.state.profile.photos.small ? <img src={props.state.profile.photos.small} className={s.post_photo} /> : <img src={postImage} className={s.post_photo} />}</div>
                    <div>{post.text}</div>
                </div>

            </>
        )
    })

    return (
        <>
            <MyPosts2 addPost={addPost} />
            <div>{allPosts}</div>

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        state: state.profilePage2,
    }

}

export default connect(mapStateToProps, { addPost })(MyPostsContainer2)