import React from 'react'
import { newNews } from '../../../types/types';
import s from '../news/news.module.css'
import NewNews from './newNews/newNews';
import NewsReduxForm, { FormDataTypeForNewsForm } from './newsForm';

const News: React.FC<IPropsForNews> = ({ addNewsPost, ...props }) => {
    const onDataSent = (formData: FormDataTypeForNewsForm) => {
        addNewsPost(formData.newsText)
    }

    let newsList = props.newsPage.map(el => <NewNews text={el.text} />)

    return (
        <div className={s.news_container}>
            {newsList}
            <NewsReduxForm onSubmit={onDataSent} />
        </div>
    )
}

export default News

type IPropsForNews = {
    newsPage: Array<newNews>
    addNewsPost: (text: string) => void
}