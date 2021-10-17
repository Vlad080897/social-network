import React from 'react'
import { connect } from 'react-redux'
import { follow, setUser, unFollow } from '../../../redux/usersPageReducer'
import Users from './users'
import { setPages } from '../../../redux/usersPageReducer'
import { setCurrentPage } from '../../../redux/usersPageReducer'
import { totalUserCount } from '../../../redux/usersPageReducer'
import { isLoading } from '../../../redux/usersPageReducer'
import { getUsersPageSelector } from '../../../redux/selectors'
import { toggleFollowing } from '../../../redux/usersPageReducer'
import { getUserThunkCreator } from '../../../redux/usersPageReducer'
import { onPageChangedThunkCreator } from '../../../redux/usersPageReducer'
import { followThunk, unFollowThunk } from '../../../redux/usersPageReducer'


class UsersContainerComponent extends React.Component {
    componentDidMount() {
        this.props.getUserThunkCreator(this.props.state.currentPage)
    }

    render() {
        return <Users totalUsersCount={this.props.state.totalUsersCount}
            portionUsers={this.props.state.portionUsers}
            currentPage={this.props.state.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.state.users}
            follow={this.props.follow}
            unFollow={this.props.unFollow}
            isLoading={this.props.state.isLoading}
            following={this.props.state.following}
            toggleFollowing={this.props.toggleFollowing}
            onPageChangedThunkCreator={this.props.onPageChangedThunkCreator}
            followThunk={this.props.followThunk}
            unFollowThunk={this.props.unFollowThunk}

        />
    }

}

const mapStateToProps = (state) => {

    return {
        state: getUsersPageSelector(state),
    }
}


export default connect(mapStateToProps, { follow, unFollow, setUser, setPages, setCurrentPage, totalUserCount, isLoading, toggleFollowing, getUserThunkCreator, onPageChangedThunkCreator, followThunk, unFollowThunk })(UsersContainerComponent)



