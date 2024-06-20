const common = require('./webpack.config.main')
const deps = require('./package.json').dependencies;
const config = common.config({
    port: 8001,
    applicationName: 'test_app_babel',
    publicName: 'Test app with babel',
    exposes: {
        './mainBabel': './src/AppBabel'
    },
    shared: {
        'react-router-dom': { singleton: true, eager: true, requiredVersion: deps['react-router-dom'] },
        'react': { singleton: true, eager: true, requiredVersion: deps.react },
        'react-dom': { singleton: true, eager: true, requiredVersion: deps['react-dom'] },
        'rxjs': { singleton: true, eager: true, requiredVersion: deps['rxjs'] },
    },
    baseUrl: '/'
})

module.exports = config;
