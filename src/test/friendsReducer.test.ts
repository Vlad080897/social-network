import massagesPageReducer, { InitialStateType } from "../redux/massagesPageReducer"
import { DialogsType, MassageType } from "../types/types"

let state: InitialStateType;

const addNewMassageAC = (masageText: string) => {
    return {
        type: 'ADD_NEW_MASSAGE',
        masageText
    } as const
}

beforeEach(() => {
    state = {
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
})

test('checking of friendsReducer', () => {

    let newState = massagesPageReducer(state, addNewMassageAC('new massage test'))
    expect(newState.massagesPage.massages.length).toBe(4);
    expect(newState.massagesPage.massages[3].massages).toBe('new massage test');

})