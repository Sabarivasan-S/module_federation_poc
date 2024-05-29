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
            // remotes: {
            //   Scheduler: "Scheduler@http://localhost:3000/remoteEntry.js",
            // },
            exposes: {
              "./Test": "./src/components/test.jsx",
              "./OnboardingPage": "./src/components/OnboardingPage.jsx",
              "./GetProperties": "./src/components/GetProperties.jsx",
              "./App": "./src/components/Routers.jsx"
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
              "@material/core": {
                singleton: true,
                // requiredVersion: deps["@material/core"],
              }
            },
          }),
        ]
    },
  },
});
