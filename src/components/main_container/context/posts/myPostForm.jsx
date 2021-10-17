import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Textarea from '../../../../Controls/controls'
import { maxLength, minLength, requiredField } from '../../../../utilits/validators/Validators.js'

const NewPostForm = (props) => {
    const addPost = (formData) => {
        debugger
        props.addPost(formData.post);
    }
    return (
        <PostReduxedForm onSubmit={addPost} />
    )

}

let maxLength15 = maxLength(15);
let minLength2= minLength(2);

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="write new post" component={Textarea} type='text' name='post' validate={[requiredField, maxLength15, minLength2]} />
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )

}


const PostReduxedForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(PostForm)


export default NewPostForm