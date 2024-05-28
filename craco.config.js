const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const deps = require("./package.json").dependencies;

module.exports = () => ({
  devServer: {
    port: 7000,
  },
  webpack: {
    configure: {
      output: {
        publicPath: "http://localhost:7000/",
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
            shared: {
              ...deps,
              react: {
                singleton: true,
                requiredVersion: deps.react,
              },
              "react-dom": {
                singleton: true,
                requiredVersion: deps["react-dom"],
              },
            },
          }),
          new HtmlWebpackPlugin({
            template: './public/index.html',
          }),
        ],
    },
  },
});
