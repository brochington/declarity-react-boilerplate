// const loaderUtils = require('loader-utils')

function transform(source, map) {
    const prependText = `/** @jsx Declarity.createEntity */`;

    const appendText = `
if (module.hot) {
    const next = require('${this.resourcePath}')

    if (!global.__DECLARITY_HOT_LOADER__) {
        global.__DECLARITY_HOT_LOADER__ = {}
        console.log('Declarity hot loader is active')
    }
    global.__DECLARITY_HOT_LOADER__['${this.resourcePath}'] = next;
    module.exports.default.__declarity_location = '${this.resourcePath}'
    module.exports.default.__declarity_id = window.crypto.getRandomValues(new Uint8Array(20))
}
`

    const newSource = process.env.NODE_ENV === 'development'
                        ? [prependText, source, appendText].join('\n\n')
                        : source;

    this.callback(null, newSource)
};

module.exports = transform;
