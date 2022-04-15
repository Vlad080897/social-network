import React from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../../redux/redux-store";
import { profileType } from "../../../types/types";
import Settings from "./settings";

type MapPropsType = {
    profileInfo: profileType | null
}


class SettingsContainer extends React.Component<MapPropsType> {


    render() {
        return <Settings />
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        profileInfo: state.profilePage2.profile,
    }
}

export default connect<MapPropsType, {}, {}, AppStateType>(mapStateToProps, {})(SettingsContainer)