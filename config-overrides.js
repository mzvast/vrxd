/**
 * @file [config-overrides]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2018-03-15 03:28:17
 */
/* eslint-disable */

const path = require('path');
// const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const {injectBabelPlugin} = require('react-app-rewired');
// const rewireInlinSource = require('react-app-rewire-inline-source');
// const rewireWebpackBundleAnalyzer = require('react-app-rewire-webpack-bundle-analyzer');

module.exports = {
    // The Webpack config to use when compiling your react app for development or production.
    webpack: function(config, env) {
        config.resolve = {
            ...config.resolve,
            alias: {
                '@': path.resolve(__dirname, 'src')
            }
        };
        // COMMON Plugins
        // config = injectBabelPlugin(
        //     'babel-plugin-transform-decorators-legacy',
        //     config
        // );

        // config = injectBabelPlugin('babel-plugin-syntax-dynamic-import', config);
        // BUILD ONLY

        // DEV ONLY
        // if (env !== 'production') {
        //     config = rewireReactHotLoader(config, env);
        // }

        // console.log(JSON.stringify(config));

        // return;

        return config;
    },
    // The Jest config to use when running your jest tests - note that the normal rewires do not
    // work here.
    jest: function(config) {
        // ...add your jest config customisation...
        // Example: enable/disable some tests based on environment variables in the .env file.
        if (!config.testPathIgnorePatterns) {
            config.testPathIgnorePatterns = [];
        }
        if (!process.env.RUN_COMPONENT_TESTS) {
            config.testPathIgnorePatterns.push(
                '<rootDir>/src/components/*.test.js'
            );
        }
        // if (!process.env.RUN_REDUCER_TESTS) {
        //     config.testPathIgnorePatterns.push(
        //         '<rootDir>/src/reducers/**/*.test.js'
        //     );
        // }
        config.setupFiles = ['<rootDir>/.jest/register-context.js'];
        // config = injectBabelPlugin('babel-plugin-require-context-hook', config);

        // console.log(JSON.stringify(config));

        // return;
        return config;
    }
};
