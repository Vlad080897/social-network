import React from 'react'
import './header.css'
import { connect } from 'react-redux'
import Header from './header'
import { authThunk, logoutThunk } from '../../../redux/authReducer'
import { compose } from 'redux'
import { getAuthReducerState } from '../../../redux/selectors'
import { AppStateType } from '../../../redux/redux-store'

type mapStatePropsType = {
    login: string | null
}

type mapDispatchPropsType = {
    authThunk: () => void
    logoutThunk: () => void

}

type PropsType = mapStatePropsType & mapDispatchPropsType

class HeaderContainer extends React.Component<PropsType> {

    render() {

        return (
            < Header login={this.props.login}
                logoutThunk={this.props.logoutThunk} />
        )

    }
}

const mapStateToProps = (state: AppStateType) => {

    return {
        login: getAuthReducerState(state),
    }
}




export default compose(
    connect<mapStatePropsType, mapDispatchPropsType, {}, AppStateType>(mapStateToProps, { authThunk, logoutThunk })
)(HeaderContainer)
