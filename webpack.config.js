const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = !isProduction;

const rendererConfig = {
  target: 'electron-renderer',
  entry: './src/renderer/index.tsx',
  output: {
    filename: 'renderer.js',
    path: path.resolve(__dirname, 'dist/renderer'),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                fiber: false,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/renderer/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist/renderer'),
      publicPath: '/',
    },
    port: 3000,
    hot: true,
    historyApiFallback: true,
    devMiddleware: {
      writeToDisk: true,
    },
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
      logging: 'warn',
    }
  },
};

const mainConfig = {
  target: 'electron-main',
  entry: './src/main/main.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/main'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets' },
      ],
    }),
  ],
};

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  
  // Update mode for both configs
  mainConfig.mode = isProduction ? 'production' : 'development';
  rendererConfig.mode = isProduction ? 'production' : 'development';
  
  // Add source maps in development
  if (!isProduction) {
    mainConfig.devtool = 'source-map';
    rendererConfig.devtool = 'source-map';
  }
  
  return [mainConfig, rendererConfig];
};
