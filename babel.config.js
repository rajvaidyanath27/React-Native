module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // remove the `plugins` entry if it's only for nativewind
  };
};
