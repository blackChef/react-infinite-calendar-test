
module.exports = {
    entry: {
    index: './index.jsx',
  },
  output: {
    filename: '[name].js'
  },
  module: {
    loaders: [{
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },

      {
        test: /\.css?$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
};