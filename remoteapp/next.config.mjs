import NextFederationPlugin from "@module-federation/nextjs-mf"
/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'remoteApp',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './RemoteAppComponent': './src/pages/index.js'
        },
      }),
    );
    return config;
  },
};

export default nextConfig;