const ON_TEXT_CHANGED = 'ON_TEXT_CHANGED';
const ADD_NEW_MASSAGE = 'ADD_NEW_MASSAGE';

const initialState = {
    massagesPage: {
        dialogs: [
            { id: 1, name: 'Vlad' },
            { id: 2, name: 'Oleg' },
            { id: 3, name: 'Dima' },
            { id: 4, name: 'Viktor' }
        ],
        massages: [
            { massages: 'Hi, how are you' },
            { massages: 'dfdfdfd' },
            { massages: 'Hi, how wfgwegare you' },
            { massages: 'Hi, hwefweow are you' },
        ],
        currentMassageText: '',
    }

}

const massagesPageReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ON_TEXT_CHANGED:
            const copyState = { ...state }
            copyState.massagesPage = { ...state.massagesPage }
            copyState.massagesPage.currentMassageText = { ...state.massagesPage.currentMassageText }
            copyState.massagesPage.currentMassageText = action.text
            return copyState
        case ADD_NEW_MASSAGE: {
            const copyState = { ...state }
            copyState.massagesPage = { ...state.massagesPage }
            copyState.massagesPage.massages = [...state.massagesPage.massages]
            const newMassage = {
                massages: action.masageText
            };
            copyState.massagesPage.massages.push(newMassage);
            return copyState
        }

        default: return state
    }

}

const onTextChaged = (text) => {
    return {
        type: ON_TEXT_CHANGED,
        text
    }

}

const addNewMassage = (masageText) => {
    
    return {
        type: ADD_NEW_MASSAGE,
        masageText
    }
}

export const dialogsThunk = (currentText) => {
    return (dispatch) => {
        dispatch(onTextChaged(currentText));
    }
}

export const addMassageThunk = (masageText) => {
    
    return (dispatch) => {
        dispatch(addNewMassage(masageText));
    }
}

export default massagesPageReducer