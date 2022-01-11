const path = require('path')

module.exports = {
    webpack: config => {
        config.resolve = {
            ...config.resolver,
            alias: { '~': path.resolve(__dirname, 'src') },
        }
        return config
    },

    jest: config => ({
        ...config,
        moduleNameMapper: {
            '^~(.*)$': '<rootDir>/src$1',
        },
    }),
}
