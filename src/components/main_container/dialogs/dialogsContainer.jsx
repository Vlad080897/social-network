import React from 'react'
import { connect } from 'react-redux'
import Dialogs from './dialogs'
import { addMassageThunk } from '../../../redux/massagesPageReducer'
import { withAuthRedirect2 } from '../../../hoc/redirectComponent2'
import { compose } from 'redux'
import withLazyComponent from '../../../hoc/lazyComponent'
import { getMassages, getUsersMassages } from '../../../redux/selectors'


class DialogsContainer extends React.Component {
    componentDidMount() {

    }

    render() {

        return (
            <Dialogs massages={this.props.massages}
                users={this.props.users}
                dialogsThunk={this.props.dialogsThunk}
                addMassageThunk={this.props.addMassageThunk}
            />
        )
    }

}

const mapStateToProps = (state) => {
    return {
        massages: getMassages(state),
        users: getUsersMassages(state),

    }
}

export default compose(
    withLazyComponent,
    connect(mapStateToProps, { addMassageThunk }),
    withAuthRedirect2,
)(DialogsContainer)