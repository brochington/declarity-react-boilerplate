import React, {Component} from "react"
import Declarity from 'declarity'
import Immutable from 'immutable'
import Staction from 'staction'

import PropsToContext from '../PropsToContext'

import SampleEntity from '../../entities/SampleEntity'

import actions from '../../actions'

const initState = Immutable.Map()

const renderDeclarity = () => {
    Declarity.register(Declarity.createEntity(SampleEntity, {
        key: 'sample-entity'
    }))
}

class App extends Component {
    componentWillMount() {
        this.staction = new Staction()

        this.staction.init(
            actions,
            () => initState,
            (state) => this.setState(state)
        )
    }

    componentDidMount() {
        renderDeclarity()
    }

    componentWillUpdate() {
        renderDeclarity()
    }

    render() {
        return (
            <PropsToContext appState={this.staction.state} actions={this.staction.actions}>
                <div>Declarity React Boilerplate</div>
            </PropsToContext>
        )
    }
}

export default App
