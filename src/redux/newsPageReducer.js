const UP_DATE_NEWS_TEXT = 'UP_DATE_NEWS_TEXT';
const ADD_NEWS_POST = 'ADD_NEWS_POST';


export const onNewsChangedActionCreator = (currentNewsText) => {
    return {
        type: 'UP_DATE_NEWS_TEXT',
        text: currentNewsText
    }
}

export const addNewsPostActionCreator = (currentNewsText) => {
    return {
        type: 'ADD_NEWS_POST',
        text: currentNewsText
    }

}

const initialState = {
    newsPage: {
        allNews: [],
        newsPageText: '',

    }
}

const newsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEWS_POST: {
            let copyState = { ...state };
            copyState.newsPage = { ...state.newsPage }
            copyState.newsPage.allNews = [...state.newsPage.allNews]
            let newNews = {
                id: '',
                text: action.text,
            }
            copyState.newsPage.allNews.push(newNews);
            return copyState
        }
        case UP_DATE_NEWS_TEXT:
            let copyState = { ...state }
            copyState.newsPageText = action.text;
            return copyState;
            
        default: return state
    }



}


export default newsPageReducer;