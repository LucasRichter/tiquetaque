
const path = require( 'path' )
const webpack = require( 'webpack' )
const CleanWebpackPlugin = require( 'clean-webpack-plugin' )
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' )
const AssetsPlugin = require( 'assets-webpack-plugin' )
const CopyWebpackPlugin = require( 'copy-webpack-plugin' )

const indexHtml = path.join( __dirname, 'src', 'index.html' )

let STATIC_ASSETS_BASE_URL = `images`

const extractStylesheet = new ExtractTextPlugin( {
  filename: `css/[name].css`,
} )
const assetsPluginInstance = new AssetsPlugin( {
  path: path.resolve( __dirname, `dest` ),
} )

const rules = {
  SCSS: {
    test: /\.scss$/i,
    use: extractStylesheet.extract( {
      use: [ {
        loader: 'css-loader',
        options: {
          minimize: true
        }
      }, {
        loader: 'resolve-url-loader',
        options: {
          souorceMap: true,
        }
      }, {
        loader: 'sass-loader',
        options: {
          data: `$STATIC_ASSETS_BASE_URL: "${STATIC_ASSETS_BASE_URL}";`,
          sourceMap: true,
        }
      }, {
        loader: 'import-glob-loader',
      } ],
      fallback: 'style-loader'
    } )
  },
  HTML: {
    test: indexHtml,
    use: [ {
      loader: 'file-loader',
      options: {
        name: `[path][name].html`,
        context: path.resolve( __dirname, 'src' ),
        outputPath: `/`
      }
    }, {
      loader: 'extract-loader'
    }, {
      loader: 'html-loader',
      options: {
        removeComments: true,
        attrs: [ 'img:src', 'img:data-src', 'source:srcset', 'source:src' ],
      }
    } ],
  },
  IMAGES: {
    test: /\.(jpe?g|png|gif|svg|ico)$/i,
    exclude: /fonts/,
    use: [ {
      loader: 'file-loader',
      options: {
        name: `[path][name].[ext]`,
        context: path.resolve( __dirname, 'src/images' ),
        outputPath: `images/`,
      }
    } ]
  },
  JS: {
    test: /\.js?$/i,
    use: [ 'babel-loader' ],
    exclude: /node_modules/
  },
}

const plugins = {
  ERRORS: new webpack.NoEmitOnErrorsPlugin(),
  CLEAN: new CleanWebpackPlugin(
    [ `dest/*` ], {
      root: path.resolve( __dirname, '/' ),
      verbose: true,
      dry: false,
      exclude: [ `.gitkeep` ]
    }
  ),
  EXTRACT_SASS: extractStylesheet,
  ASSETS: assetsPluginInstance,
  COPY_ROBOTS: new CopyWebpackPlugin( [ {
    from: `src/robots.txt`,
    to: `/`,
    ignore: [ `.gitkeep` ]
  } ] ),
}

module.exports = {
  stats: {
    children: false
  },
  context: __dirname,
  entry: [
    path.join( __dirname, 'src', 'index.js' ),
    indexHtml,
  ],
  output: {
    filename: `js/[name].js`,
    path: path.resolve( __dirname, `dest` ),
    publicPath: `/`
  },
  plugins: [
    plugins.CLEAN,
    plugins.EXTRACT_SASS,
    plugins.ASSETS,
    plugins.COPY_ROBOTS,
  ],
  module: {
    rules: [
      rules.SCSS,
      rules.IMAGES,
      rules.HTML,
      rules.JS,
    ],
  },
  resolve: {
    modules: [
      'node_modules',
      'src',
    ],
    extensions: [
      '.js',
      '.jsx'
    ]
  }
}
