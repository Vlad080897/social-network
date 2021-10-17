import React from 'react'
import s from '../news/news.module.css'
import news_photo from '../../img/news_photo.jpg'
import BtnSend from '../../app/btn-send/btnSend'
import NewNews from './newNews/newNews'
import { addNewsPostActionCreator } from '../../../redux/newsPageReducer'
import { onNewsChangedActionCreator } from '../../../redux/newsPageReducer'
import { connect } from 'react-redux'
import News from './news'

const mapStateToProps = (state) => {
    
    return {
        newsPage: state.newsPage.newsPage.allNews,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewsPost: (currentNewsText) => {
            dispatch(addNewsPostActionCreator(currentNewsText))
        },

        onNewsChanged: (currentNewsText) => {
            dispatch(onNewsChangedActionCreator(currentNewsText))
        }

    }
}

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsContainer