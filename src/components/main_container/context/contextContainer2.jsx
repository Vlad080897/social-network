import React from "react";
import { connect } from "react-redux";
import Context2 from "./context2";
import { getCurrentUserProfile } from "../../../redux/profilePageReducer2";
import { compose } from "redux";
import { withRouter } from "react-router";
import { withAuthRedirect2 } from "../../../hoc/redirectComponent2";
import { withCurrentUserId } from "../../../hoc/currentUserIdComponent";
import { getStatus } from "../../../redux/profilePageReducer2";

class ContextContainer2 extends React.Component {

    componentDidMount() {
        debugger
        let userID = this.props.match.params.userID
        if (!userID) {
            userID = this.props.idOfCurrentUser;
        }
        this.props.getCurrentUserProfile(userID)
        this.props.getStatus(userID)
    }

    componentDidUpdate(preProps) {
        debugger
        if (preProps.match.params.userID !== this.props.match.params.userID) {
            let userID = this.props.match.params.userID
            if (!userID) {
                userID = this.props.idOfCurrentUser;
            }
            this.props.getCurrentUserProfile(userID);
            this.props.getStatus(userID)
        }

    }
    render() {
        return <Context2 {...this.props} />
    }
}

const mapStateToProps = (state) => {
    debugger
    return {
        state: state.profilePage2.profile,
        idOfCurrentUser: state.authReducer.id
    }
}

export default compose(
    connect(mapStateToProps, { getCurrentUserProfile, getStatus }),
    withRouter,
    withAuthRedirect2,
)(ContextContainer2)