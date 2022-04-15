import React from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router"
import { AppStateType } from "../redux/redux-store"

const mapStateToProps = (state: AppStateType) => {
    return {
        isLogged: state.authReducer.isLogged
    }
}
type mapStatePropsType = {
    isLogged: boolean
}
type DispatchPropsType = {

}


export function withAuthRedirect2<T>(Component: React.ComponentType<T>) {

    const RedirectComponent: React.FC<mapStatePropsType> = (props) => {
        const { isLogged, ...restProps } = props;
        if (props.isLogged === false) return <Redirect to='/login' />
        return (
            < Component {...restProps as T} />
        )
    }


    const RedirectWithState = connect<mapStatePropsType, DispatchPropsType, T, AppStateType>(mapStateToProps, {})(RedirectComponent)

    return RedirectWithState
}





