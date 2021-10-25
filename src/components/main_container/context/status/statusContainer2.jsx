import React, { useEffect, useState } from "react";
import Status2 from "./status2";
import { connect } from "react-redux";
import { getStatus, setStatus2 } from "../../../../redux/profilePageReducer2";
import { compose } from "redux";


const StatusContainer2 = ({ statusState, getStatus, setStatus2, ...props }) => {

    const [status, statusChanged] = useState(statusState)
    const [editMode, changeEditMode] = useState(false);

    useEffect(() => {
        getStatus(props.match.params.userID);
        statusChanged(statusState);
    }, [statusState])

    const onEditMode = () => {
        changeEditMode(true);
    };

    const offEditMode = () => {
        changeEditMode(false);
        setStatus2(status)
    }

    const onChange = (e) => {
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

const mapStateToProps = (state) => {
    return {
        statusState: state.profilePage2.status,
        profile: state.profilePage2.profile

    }
}

export default compose(
    connect(mapStateToProps, { getStatus, setStatus2 }),
)(StatusContainer2);