import React from "react";
import { connect } from "react-redux";
import Context2 from "./context2";
import { compose } from "redux";
import { withRouter } from "react-router";
import { withAuthRedirect2 } from "../../../hoc/redirectComponent2";
import { getStatus, setNewPhoto, saveProfileInfo, getCurrentUserProfile } from "../../../redux/profilePageReducer2";
import { getProfilePageInfo, getButtonCondition, getIdOfCurrentUser } from "../../../redux/selectors";


class ContextContainer2 extends React.Component {
    setNewPhoto = (e) => {
        this.props.setNewPhoto(e.currentTarget.files[0])
    }

    refreshProfile() {
        let userID = this.props.match.params.userID
        if (!userID) {
            userID = this.props.idOfCurrentUser;
        }
        this.props.getCurrentUserProfile(userID);
        this.props.getStatus(userID)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(preProps) {
        if (preProps.match.params.userID !== this.props.match.params.userID) {
            this.refreshProfile()
        }

    }

    shouldComponentUpdate(nextProps) {
        if (this.props !== nextProps) {
            return true
        }

    }
    render() {
        return <Context2 {...this.props}
            isOwner={!this.props.match.params.userID}
            setNewPhoto={this.setNewPhoto}
            saveProfileInfo={this.props.saveProfileInfo}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        state: getProfilePageInfo(state),
        btnDisable: getButtonCondition(state),
        idOfCurrentUser: getIdOfCurrentUser(state)
    }
}

export default compose(
    connect(mapStateToProps, { getCurrentUserProfile, getStatus, setNewPhoto, saveProfileInfo }),
    withRouter,
    withAuthRedirect2,
)(ContextContainer2)