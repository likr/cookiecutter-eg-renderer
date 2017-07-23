const path = require('path')
const webpack = require('webpack')

const options = {
  module: {
    rules: [
    ]
  },
  entry: {
    'eg-renderer': 'eg-renderer',
    'eg-renderer-ogdf': 'eg-renderer-ogdf',
    bundle: './src/index'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  externals: {
  },
  plugins: [
  ],
  resolve: {
    extensions: ['.js']
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    port: {{cookiecutter.dev_port}}
  },
  node: {
    fs: 'empty'
  }
}

if (process.env.NODE_ENV === 'production') {
  options.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }))
} else {
  Object.assign(options, {
    devtool: 'inline-source-map'
  })
}

module.exports = options
