const path = require('path')

module.exports = function override(config) {
    config.resolve = {
        ...config.resolver,
        alias: { '~': path.resolve(__dirname, 'src') },
    }

    return config
}
