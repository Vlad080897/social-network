import React from 'react'
import s from '../posts/my-posts.module.css'
import BtnSend from '../../../app/btn-send/btnSend'
import NewPosts from '../posts/newPosts/newPosts'
import { Field } from 'redux-form'
import { addPostActionCreator, updatePostActionCreator } from '../../../../redux/profilePageReducer'
import NewPostForm from './myPostForm'

const MyPosts = (props) => {
    let postTextEl = props.newPostText.map(el => <NewPosts newPostText={el.text} />)

    return (
        <>
            <div className='my_posts'>My Posts</div>
            <NewPostForm addPost={props.addPost} />
            {postTextEl}

        </>

    )



}

export default MyPosts
