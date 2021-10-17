import React from 'react'
import { connect } from 'react-redux'
import Dialogs from './dialogs'
import { dialogsThunk, addMassageThunk } from '../../../redux/massagesPageReducer'
import { Redirect } from 'react-router-dom'
import { withAuthRedirect2 } from '../../../hoc/redirectComponent2'
import { compose } from 'redux'
import withLazyComponent from '../../../hoc/lazyComponent'

class DialogsContainer extends React.Component {
    componentDidMount() {

    }

    render() {

        return (
            <Dialogs state={this.props.state}
                dialogsThunk={this.props.dialogsThunk}
                addMassageThunk={this.props.addMassageThunk}
            />
        )
    }

}

const mapStateToProps = (state) => {

    return {
        state: state.massagesPage.massagesPage,

    }
}

export default compose(
    withLazyComponent,
    connect(mapStateToProps, { dialogsThunk, addMassageThunk }),
    withAuthRedirect2,
)(DialogsContainer)