import React from 'react'
import './header.css'
import { connect } from 'react-redux'
import Header from './header'
import { setUserData } from '../../../redux/authReducer'
import { authThunk, logoutThunk } from '../../../redux/authReducer'
import { compose } from 'redux'

class HeaderContainer extends React.Component {

    render() {

        return (
            < Header {...this.props} />
        )

    }
}

const mapStateToProps = (state) => {

    return {
        state: state.authReducer
    }
}




export default compose(connect(mapStateToProps, { setUserData, authThunk, logoutThunk }))(HeaderContainer)
