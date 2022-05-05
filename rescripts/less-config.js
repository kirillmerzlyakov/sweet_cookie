const { getPaths, edit } = require("@rescripts/utilities");

const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

const isSassLoader = (node) => {
  return (
    node.use &&
    node.use.some((use) => use.loader && use.loader.includes("sass-loader"))
  );
};

module.exports = (config) => {
  const loaderPathesInConfig = getPaths(isSassLoader, config);
  const configWithLessLoaders = edit(
    (loaderConfig) => {
      const sassLoader = loaderConfig.use.find(
        (config) => config.loader && config.loader.includes("sass-loader")
      );
      sassLoader.loader = require.resolve("less-loader");
      if (loaderConfig.exclude) {
        loaderConfig.test = lessRegex;
      } else {
        loaderConfig.test = lessModuleRegex;
      }
      return loaderConfig;
    },
    loaderPathesInConfig,
    config
  );

  return configWithLessLoaders;
};
