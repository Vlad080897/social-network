import React from "react";
import { connect } from "react-redux";
import Settings from "./settings";


class SettingsContainer extends React.Component {


    render() {
        // return <Settings {...this.props} />
        return <div></div>
    }
}

const mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage2.profile,
    }
}

export default connect(mapStateToProps, {})(SettingsContainer)