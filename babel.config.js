module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // ...existing plugins...
      '@babel/plugin-transform-class-static-block'
    ],
  };
};
