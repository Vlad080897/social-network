import React from 'react'
import s from '../posts/my-posts.module.css'
import BtnSend from '../../../app/btn-send/btnSend'
import NewPosts from './newPosts/newPosts'
import MyPosts from './myPosts'
import { addPostActionCreator, updatePostActionCreator } from '../../../../redux/profilePageReducer'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
   
    return {
        newPostText: state.profilePage.newPostText,
        postText: state.profilePage.postText,
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        addPost: (userText) => {
            dispatch(addPostActionCreator(userText));
        },
        onPostChange: (userText) => {
            dispatch(updatePostActionCreator(userText));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer
