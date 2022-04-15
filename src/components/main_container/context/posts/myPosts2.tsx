import React from 'react'
import Textarea, { createField } from '../../../../Controls/controls'
import { Field, reduxForm, InjectedFormProps, Fields, WrappedFieldProps } from 'redux-form'
import s from './my-posts.module.css'
import { requiredField } from '../../../../utilits/validators/Validators'
import { validatorsType } from '../../../../types/types'


type propsMyPostForm = keyof myPostValuesType

type myPostValuesType = {
    postText?: string
}

const MyPostsForm2: React.FC<StatePropsType> = ({ addNewPost }) => {
    const getValues = (values: myPostValuesType) => {
        addNewPost(values.postText);
    }
    return (
        <ReduxFormForPosts onSubmit={getValues} />
    )
}







const FormForPosts: React.FC<InjectedFormProps> = ({ handleSubmit }) => {
    return (
        <>

            <form onSubmit={handleSubmit} >
                <span>My Posts</span>
                {createField<propsMyPostForm>(Textarea, 'text', 'postText', 'Write your post here...', [requiredField])}
                {/* <Field component={Textarea} type='text' name='postText' placeholder='Write your post here...' className={s.my_post} validate={[requiredField]} /> */}
                <button>Add Post</button>
            </form>
        </>
    )
}


const ReduxFormForPosts = reduxForm({
    form: 'posts'
})(FormForPosts)




type StatePropsType = {
    addNewPost: (postMassage?: string) => void
}

const MyPosts2: React.FC<StatePropsType> = ({ addNewPost }) => {
    return (
        <>
            <MyPostsForm2 addNewPost={addNewPost} />
        </>
    )
}

export default MyPosts2

