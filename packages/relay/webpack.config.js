const path = require('path')
const {resolve} = require('path')
const {CheckerPlugin, TsConfigPathsPlugin} = require('awesome-typescript-loader')

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    plugins: [new TsConfigPathsPlugin()],
  },
  optimization: {
    minimize: false
  },
  context: resolve(__dirname, './src'),
  entry: './index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: {
      name: 'relay',
      type: 'umd',
    },
  },
  devtool: 'source-map',
  plugins: [
    new CheckerPlugin(),
  ],
  externals: {
    'react': {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
    },
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'awesome-typescript-loader'],
      },
    ],
  },
};