import React from 'react'
import Textarea from '../../../../Controls/controls'
import { Field, reduxForm } from 'redux-form'
import s from './my-posts.module.css'

const MyPostsForm2 = (props) => {
    const getValues = (values) => {
        props.addPost(values.postText);
    }
    return (
        <ReduxFormForPosts onSubmit={getValues} />
    )
}

const FormForPosts = (props) => {
    return (
        <>

            <form onSubmit={props.handleSubmit} >
                <span>My Posts</span>
                <Field component={Textarea} type='text' name='postText' placeholder='Write your post here...' className={s.my_post } />
                <button>Add Post</button>
            </form>
        </>
    )
}


const ReduxFormForPosts = reduxForm({
    form: 'posts'
})(FormForPosts)

const MyPosts2 = (props) => {
    return (
        <>
            <MyPostsForm2 addPost={props.addPost} />
        </>
    )
}

export default MyPosts2

