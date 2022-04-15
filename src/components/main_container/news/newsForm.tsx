import React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";
import Textarea from "../../../Controls/controls";
import { createField } from "../../../Controls/controls";
import { requiredField } from "../../../utilits/validators/Validators";
import s from '../news/news.module.css'

const NewsForm: React.FC<IPropsForNewsForm & InjectedFormProps<FormDataTypeForNewsForm, IPropsForNewsForm>> = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<PropsNameForNewsForm>(Textarea, 'text', 'newsText', 'Write your news here...', [requiredField])}
            <button type='submit' className={s.news_send} > Post News</button>
        </form>
    )
}

const NewsReduxForm = reduxForm<FormDataTypeForNewsForm, IPropsForNewsForm>({ form: 'news' })(NewsForm)

export default NewsReduxForm

type IPropsForNewsForm = {
    onSubmit: (formData: FormDataTypeForNewsForm) => void

}

export type FormDataTypeForNewsForm = {
    newsText: string
}

type PropsNameForNewsForm = keyof FormDataTypeForNewsForm