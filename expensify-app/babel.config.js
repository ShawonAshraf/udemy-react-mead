module.exports = function () {
  const presets = [
    "@babel/env",
    "@babel/preset-react"
  ];

  const plugins = [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread"
  ];

  return {
    presets,
    plugins
  };
}
