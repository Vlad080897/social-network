import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

const mapStatetoPropsForRedirect = (state) => {
    return {
        isLogged: state.authReducer.isLogged
    }
}

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isLogged) return <Redirect to="/login" />
            return <Component {...this.props} />
        }
    }
    const connectedAuthRedirect = connect(mapStatetoPropsForRedirect)(RedirectComponent)
    return connectedAuthRedirect
}

export const withAuthRedirectToProfile = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (this.props.isLogged === true) return <Redirect to="/profile" />
            return <Component {...this.props} />
        }
    }
    const connectedAuthRedirect = connect(mapStatetoPropsForRedirect)(RedirectComponent)
    return connectedAuthRedirect
}

