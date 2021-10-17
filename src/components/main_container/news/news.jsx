import React from 'react'
import s from '../news/news.module.css'
import news_photo from '../../img/news_photo.jpg'
import BtnSend from '../../app/btn-send/btnSend'
import NewNews from './newNews/newNews'
import { addNewsPostActionCreator } from '../../../redux/newsPageReducer'
import { onNewsChangedActionCreator } from '../../../redux/newsPageReducer'

const News = (props) => {
    
    let newsList = props.newsPage.map(el => <NewNews text={el.text} />)
    let newsText = React.createRef();

    let addNewsPost = () => {
        let currentNewsText = newsText.current.value;
        props.addNewsPost(currentNewsText);
    }

    let onNewsChanged = () => {
        let currentNewsText = newsText.current.value;
        props.onNewsChanged(currentNewsText);
    }


    return (
        <div className={s.news_container}>
            {newsList}
            <textarea ref={newsText} name="" id="" onChange={onNewsChanged} value={props.newsPageText} />
            <BtnSend className={s.news_send} addNewsPost={addNewsPost} />
        </div>
    )
}

export default News