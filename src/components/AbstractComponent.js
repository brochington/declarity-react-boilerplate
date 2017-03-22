import React, {Component, PropTypes} from "react"
import Immutable from 'immutable'

/**
* Abstract class that wraps the React.Component class.
*/
class AbstractComponent extends Component {
    static contextTypes = {
        appState: PropTypes.object,
        actions: PropTypes.object
    }
}


export default AbstractComponent
