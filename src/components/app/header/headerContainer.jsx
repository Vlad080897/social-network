import React from 'react'
import './header.css'
import { connect } from 'react-redux'
import Header from './header'
import { setUserData } from '../../../redux/authReducer'
import { authThunk, logoutThunk } from '../../../redux/authReducer'
import { compose } from 'redux'
import { getAuthReducerState } from '../../../redux/selectors'

class HeaderContainer extends React.Component {

    render() {

        return (
            < Header {...this.props} />
        )

    }
}

const mapStateToProps = (state) => {

    return {
        state: getAuthReducerState(state),
    }
}




export default compose(connect(mapStateToProps, { setUserData, authThunk, logoutThunk }))(HeaderContainer)
