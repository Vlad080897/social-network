import React from 'react'
import Status from './status'

class StatusContainer extends React.Component {
    state = {
        isEditMode: false,
        status: this.props.status
    }

    onEditMode = () => {
        this.setState({
            isEditMode: true
        })
    }

    offEditMode = () => {
        this.setState(
            {
                isEditMode: false
            }
        )

        this.props.updateStatus(this.state.status)



    }
    onChange = (e) => {
        this.setState(
            {
                status: e.currentTarget.value
            }
        )
    }


    componentDidUpdate(prevProps, prevState) {
        
        let a = this.state
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })

        }
    }


    render() {
        return (
            <Status isEditMode={this.state.isEditMode}
                currentStatus={this.state.status}
                status={this.props.status}
                onEditMode={this.onEditMode}
                onChange={this.onChange}
                offEditMode={this.offEditMode}

            />
        )
    }
}

export default StatusContainer