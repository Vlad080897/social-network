import { DialogsType, MassageType } from "../types/types";
import { BaseThunkType } from "./redux-store";

const initialState = {
    massagesPage: {
        dialogs: [
            { id: 1, name: 'Vlad' },
            { id: 2, name: 'Dima' },
            { id: 3, name: 'Viktor' }
        ] as Array<DialogsType>,
        massages: [
            { massages: 'Hi, how are you? ' },
            { massages: 'Hi, how have you been doing? ' },
            { massages: 'Hi, are you busy? ' },
        ] as Array<MassageType>,
    }

}

const massagesPageReducer = (state = initialState, action: ActionsType) => {

    switch (action.type) {

        case 'ADD_NEW_MASSAGE': {
            const newMassage: NewMAssage = {
                massages: action.masageText
            };
            return {
                ...state,
                ...state.massagesPage,
                ...state.massagesPage.massages = [...state.massagesPage.massages, newMassage],
            }
        }

        default: return state
    }

}

const actions = {
    addNewMassageAC: (masageText: string) => {
        return {
            type: 'ADD_NEW_MASSAGE',
            masageText
        } as const
    }
}

export const addMassageThunk = (masageText: string): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.addNewMassageAC(masageText));
    }
}

export default massagesPageReducer



type NewMAssage = {
    massages: string
}

export type InitialStateType = typeof initialState
type ActionsType = PropsTypes<typeof actions>
type PropsTypes<T> = T extends { [key: string]: (...arg: any) => infer U } ? U : never;
type ThunkType = BaseThunkType<ActionsType>