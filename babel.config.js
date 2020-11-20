module.exports = {
  presets: [
    ['@babel/preset-env', '@babel/preset-react'],
    ['@babel/present-env', {targets: {node: 'current'}}]
  ]
};