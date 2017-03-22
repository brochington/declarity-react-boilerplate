import React, {Component, PropTypes} from "react"

class PropsToContext extends Component {
    static propTypes = {
        actions: PropTypes.object,
        appState: PropTypes.object
    }

    static childContextTypes = {
        actions: PropTypes.object,
        appState: PropTypes.object
    }

    getChildContext() {
        const {actions, appState} = this.props

        return {actions, appState}
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default PropsToContext
