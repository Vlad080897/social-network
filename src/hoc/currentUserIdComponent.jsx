import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        currentUserId: state.authReducer.id
    }
}

export const withCurrentUserId = (Component) => {
    class WrapperComponent extends React.Component {
        render() {
            debugger
            let userID = this.props.match ? this.props.match.params.userID : this.props.currentUserId;
            if (!userID) {
                userID = this.props.currentUserId;
            }
            return <Component {...this.props} userID={userID} />
        }
    }

    const connectedWrapperComponent = connect(mapStateToProps, {})(WrapperComponent)

    return connectedWrapperComponent

}