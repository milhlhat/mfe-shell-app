const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const packageJson = require("../package.json");
const appVersion = packageJson.version;

module.exports = ({ serve }) => {
  return {
    optimization: {
      moduleIds: "named",
      chunkIds: "named",
      runtimeChunk: false,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "ShellApp",
        filename: "remoteEntry.js",
        remotes: {
          ShellApp : "ShellApp@http://localhost:3060/remoteEntry.js",
          OrderApp: "OrderApp@http://localhost:3061/remoteEntry.js",
          ProductApp: "ProductApp@http://localhost:3062/remoteEntry.js",
        },
        exposes: {
          "./Layout": "./src/Layout.tsx",
          "./useStore": "./src/store.ts",
        },
        shared: {
          ...Object.fromEntries(
            Object.entries(packageJson.dependencies).map(([module]) => [
              module,
              { singleton: true, shareScope: "default" },
            ])
          ),

          Footer: {
            singleton: true,
            import: "src/Footer.tsx",
            requiredVersion: appVersion,
          },
          Layout: {
            singleton: true,
            import: "src/Layout.tsx",
            requiredVersion: appVersion,
          },
          useStore: {
            singleton: true,
            import: "src/useStore.ts",
            requiredVersion: appVersion,
          },
        },
      }),
    ],
    output: {
      publicPath: "auto",
    },
  };
};
