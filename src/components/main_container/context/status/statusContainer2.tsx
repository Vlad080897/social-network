import React, { ComponentType, SyntheticEvent, useEffect, useState } from "react";
import Status2 from "./status2";
import { connect } from "react-redux";
import { getStatus, setStatus2 } from "../../../../redux/profilePageReducer2";
import { compose } from "redux";
import { AppStateType } from "../../../../redux/redux-store";
import { profileType } from "../../../../types/types";



const StatusContainer2: React.FC<IPropsTypeForStatusContainer2> = ({ statusState, getStatus, setStatus2, ...props }) => {
    const [status, statusChanged] = useState(statusState)
    const [editMode, changeEditMode] = useState(false);

    useEffect(() => {
        getStatus(props.profile ? props.profile.userId?.toString() : undefined);
        statusChanged(statusState);
    }, [statusState])

    const onEditMode = () => {
        changeEditMode(true);
    };

    const offEditMode = () => {
        changeEditMode(false);
        setStatus2(status)
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        statusChanged(e.currentTarget.value)
    }


    return (
        <Status2 statusState={statusState}
            editMode={editMode}
            onEditMode={onEditMode}
            offEditMode={offEditMode}
            onChange={onChange}
            localStatus={status}
        />
    )
}

const mapStateToProps = (state: AppStateType) => {
    return {
        statusState: state.profilePage2.status,
        profile: state.profilePage2.profile

    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, { getStatus, setStatus2 }),
)(StatusContainer2);

type IPropsTypeForStatusContainer2 = mapStateProps & mapDispatchProps & ownProps

type mapStateProps = {
    statusState: string
    profile: profileType

}

type mapDispatchProps = {
    getStatus: (id: string | undefined) => void
    setStatus2: (statusText: string) => void
}

type ownProps = {
    userId: string | undefined
}