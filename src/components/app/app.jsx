import React from 'react'
import s from './app.css'
import Container from '../main_container/container'
import HeaderContainer from './header/headerContainer'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { initializedThunk } from '../../redux/appReducer'
import preloader from './../img/__Iphone-spinner-1.gif'
import { compose } from 'redux'
import Loader from './loader/loader'


class App extends React.Component {

    componentDidMount() {

        this.props.initializedThunk()
    }

    render() {

        if (!this.props.initialized) {
            return <Loader isLoading={true} />
        }

        return (
            <>
                <div className="wrapper">
                    <HeaderContainer />
                    <Container
                        state={this.props.store}
                        newPostText={this.props.store.profilePage.newPostText}
                        friends={this.props.store.friendsPage}
                        dispatch={this.props.dispatch}
                        postText={this.props.store.profilePage.postText}
                    />

                </div>
            </>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        initialized: state.appReducer.isInitialized
    }
}



export default compose(
    connect(mapStateToProps, { initializedThunk }),
    withRouter
)(App)