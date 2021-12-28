const node = require('@rollup/plugin-node-resolve').nodeResolve

module.exports = {
  input: './src/index.js',
  output: {
    file: './dist/router.js',
    format: 'es'
  },
  plugins: [
    node()
  ]
}