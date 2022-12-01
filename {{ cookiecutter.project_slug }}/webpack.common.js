const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { EnvironmentPlugin } = require("webpack");

module.exports = {
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    path: path.join(__dirname, "dist", "public"),
    filename: "index.js",
    publicPath: "/public",
  },
  mode: "development",
  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-typescript",
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: "css-loader",
            options: {
              esModule: true,
              modules: {
                namedExport: true,
              },
            },
          },
        ],
        include: [
          path.join(__dirname, "src"),
          path.join(__dirname, "..", "node_modules", "@atlaskit", "css-reset"),
        ],
      },
    ],
  },

  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
      filename: path.join(__dirname, "dist", "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
};
