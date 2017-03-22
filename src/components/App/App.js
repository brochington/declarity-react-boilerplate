import React, {Component} from "react"
import Immutable from 'immutable'
import Staction from 'staction'

import PropsToContext from '../PropsToContext'
import actions from '../../actions'

const initState = Immutable.Map()

class App extends Component {
    componentWillMount() {
        this.staction = new Staction()

        this.staction.init(
            actions,
            () => initState,
            (state) => this.setState(state)
        )
    }

    render() {
        return (
            <PropsToContext appState={this.staction.state} actions={this.staction.actions}>
                <div>Hello there!</div>
            </PropsToContext>
        )
    }
}

export default App
