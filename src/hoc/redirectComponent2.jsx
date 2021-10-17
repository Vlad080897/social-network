import React from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router"

const mapStateToProps = (state) => {
    return {
        isLogged: state.authReducer.isLogged
    }
}


export const withAuthRedirect2 = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (this.props.isLogged === false) return <Redirect to='/login' />
            return <Component {...this.props} />
        }
    }
    const RedirectWithState = connect(mapStateToProps, {})(RedirectComponent)

    return RedirectWithState
}



