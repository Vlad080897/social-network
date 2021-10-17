import React from "react"
import { connect } from "react-redux";
import { getUsers, setCurrentPageNumber, startFollowUser, stopFollowUser } from "../../../redux/userPageReducer2"
import User2 from "./user2";

class User2Container extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.state.currentPage);
    }

    pageHasChanged = (p) => {
        this.props.setCurrentPageNumber(p);
        this.props.getUsers(p);

    }

    followUser = (id) => {
        this.props.startFollowUser(id);
    }

    unFollowUser = (id) => {
        this.props.stopFollowUser(id);
    }

    render() {
        return (
            <User2 state={this.props.state}
                pageHasChanged={this.pageHasChanged}
                followUser={this.followUser}
                unFollowUser={this.unFollowUser}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state: state.usersPageReducer2
    }
}
export default connect(mapStateToProps, { getUsers, setCurrentPageNumber, startFollowUser, stopFollowUser })(User2Container)