/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
    },
    transpilePackages: ['flotiq-components-react'],
    webpack: (config, options) => {
        if (!options.isServer) {
            // eslint-disable-next-line no-param-reassign
            config.resolve.alias['@sentry/node'] = '@sentry/browser'
        }
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        })
        return config
    },
}

module.exports = nextConfig
