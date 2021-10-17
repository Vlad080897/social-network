import React from 'react'
import { PureComponent } from 'react'
import s from '../context/context.module.css'
import { connect } from 'react-redux'
import { setUserProfile, currentUserProfileThunk, getStatus, updateStatus } from '../../../redux/profilePageReducer'
import Context from './context'
import { withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../../hoc/redirectComponent'
import { compose } from 'redux'


class ContextContainer extends PureComponent {

    componentDidMount() {
        let userID = this.props.match.params.userID
        if (!userID) {
            userID = 18805;
        }
        this.props.currentUserProfileThunk(userID)
        this.props.getStatus(userID)
        
    }

    render() {
        
        return (
            <Context {...this.props} />
        )
    }
}

const mapDispatchToProps = (state) => {

    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status

    }


}

export default compose(
    connect(mapDispatchToProps, { setUserProfile, currentUserProfileThunk, getStatus, updateStatus }),
    withRouter,
    withAuthRedirect
)(ContextContainer)
