import React from 'react'
import { connect } from 'react-redux'
import Dialogs from './dialogs'
import { addMassageThunk } from '../../../redux/massagesPageReducer'
import { withAuthRedirect2 } from '../../../hoc/redirectComponent2'
import { compose } from 'redux'
import withLazyComponent from '../../../hoc/lazyComponent'
import { getMassages, getUsersMassages } from '../../../redux/selectors'
import { AppStateType } from '../../../redux/redux-store'
import { usersType, MassageType, DialogsType } from '../../../types/types'


type MapPropsType = {
    massages: Array<MassageType>,
    users: Array<DialogsType>
}

type MapDispatchProps = {
    addMassageThunk: (masageText: string) => void
}

class DialogsContainer extends React.Component<MapPropsType & MapDispatchProps> {
    componentDidMount() {

    }

    render() {
        return (
            <Dialogs />
        )
    }

}

const mapStateToProps = (state: AppStateType) => {
    return {
        massages: getMassages(state),
        users: getUsersMassages(state),

    }
}

export default compose<React.ComponentType>(
    withLazyComponent,
    connect<MapPropsType, MapDispatchProps, {}, AppStateType>(mapStateToProps, { addMassageThunk }),
    withAuthRedirect2,
)(DialogsContainer)