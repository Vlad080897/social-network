import React from 'react'
import { connect } from 'react-redux'
import News from './news'
import { addNewsPost } from '../../../redux/newsPageReducer'
import { AppStateType } from '../../../redux/redux-store'
import { newNews } from '../../../types/types'

const NewsContainer: React.FC<IPropsForNewsContainer> = ({ addNewsPost, newsPage }) => {

    return (
        < News addNewsPost={addNewsPost} newsPage={newsPage} />
    )
}

const mapStateToProps = (state: AppStateType) => {

    return {
        newsPage: state.newsPage.newsPage.allNews,
    }
}

export default connect<MapStatePropsType, MapDispatchProps, OwnProps, AppStateType>(mapStateToProps, { addNewsPost })(NewsContainer);

type IPropsForNewsContainer = MapStatePropsType & MapDispatchProps & OwnProps

type MapStatePropsType = {
    newsPage: Array<newNews>
}
type MapDispatchProps = {
    addNewsPost: (text: string) => void
}
type OwnProps = {

}