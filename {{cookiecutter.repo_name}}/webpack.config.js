const path = require('path')

const options = {
  module: {
    rules: [
    ]
  },
  entry: {
    bundle: './src/index'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  plugins: [
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    port: {{cookiecutter.dev_port}}
  },
  node: {
    crypto: 'empty',
    path: 'empty',
    fs: 'empty'
  }
}

module.exports = options
