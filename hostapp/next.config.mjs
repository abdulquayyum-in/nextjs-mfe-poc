import NextFederationPlugin from "@module-federation/nextjs-mf"
/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'HostApp',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          remoteApp: `remoteApp@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
      }),
    );
    return config;
  },
};

export default nextConfig;