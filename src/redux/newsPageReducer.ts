import { newNews } from '../types/types'
import { BaseThunkType } from './redux-store'


const initialState = {
    newsPage: {
        allNews: [] as Array<newNews>,
    }
}


const newsPageReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SC/NEWS/ADD_NEWS_POST':
            let newNews = {
                id: '',
                text: action.text,
            }
            return {
                ...state,
                ...state.newsPage,
                ...state.newsPage.allNews = [...state.newsPage.allNews, newNews]
            }

        default: return state
    }
}

const actions = {
    addNewsPostAC: (currentNewsText: string) => {
        return {
            type: 'SC/NEWS/ADD_NEWS_POST',
            text: currentNewsText
        } as const
    }
}

export const addNewsPost = (text: string): ThunkType => {
    return async (dispatch: any) => {
        dispatch(actions.addNewsPostAC(text))
    }
}


export default newsPageReducer;

type InitialStateType = typeof initialState
type ActionsType = PropsType<typeof actions>
type PropsType<T> = T extends { [key: string]: (...arg: any) => infer U } ? U : never
type ThunkType = BaseThunkType<ActionsType>


