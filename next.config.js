const withImages = require("next-images")
const nextComposePlugins = require('next-compose-plugins');
const { withPlugins } = nextComposePlugins.extend(() => ({}));
const withTM = require('next-transpile-modules')(['flotiq-components-react'])

module.exports = withPlugins([withTM, withImages], {
    images: {
        dangerouslyAllowSVG: true,
    },
    turbopack: {
        rules: {
            '*.svg': {
                loaders: ['@svgr/webpack'],
                as: '*.js',
            },
        },
    },
})
