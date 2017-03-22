import React from 'react'
import ReactDOM from 'react-dom'

import {AppContainer} from 'react-hot-loader'

const render = () => {
    const Root = require('./root').default

    ReactDOM.render(
        <AppContainer>
            <Root />
        </AppContainer>,
        document.getElementById('root')
    )
}

if (module.hot) {
    module.hot.accept('./root', render)
}

render()
