const { ModuleFederationPlugin } = require("webpack").container;

const deps = require("./package.json").dependencies;

module.exports = () => ({
  devServer: {
    port: 7000,
  },
  webpack: {
    configure: {
      output: {
        publicPath: "auto",
      },
    },
      plugins: {
        add: [
          new ModuleFederationPlugin({
            name: "onboarding",
            filename: "remoteEntry.js",
            exposes: {
              "./Test": "./src/components/test.jsx",
              "./OnboardingPage": "./src/components/OnboardingPage.jsx",
            },
            shared: ['react', 'react-dom'],
          }),
        ],
    },
  },
});
