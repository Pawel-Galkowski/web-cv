// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path')
const nodeExternals = require('webpack-node-externals')

const isProduction = process.env.NODE_ENV == 'production'

const config = {
  entry: './src/index.ts',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    open: false,
    host: 'localhost',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
  },
  externalsPresets: {
    node: true,
  },
}

module.exports = () => {
  config.mode = isProduction ? 'production' : 'development'
  return config
}

