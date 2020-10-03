const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
require('dotenv').config();
module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|jpg|jpeg|svg|gif)?$/,
				use: 'file-loader',
			},
		],
	},
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: path.resolve(__dirname, 'public/index.html'),
			filename: 'index.html',
			favicon: './assets/sneakerlogo.jpeg',
		}),
		new webpack.DefinePlugin({
			'process.env': {
				API_URL: JSON.stringify(process.env.API_URL),
			},
		}),
	],
	performance: {
		hints: false,
	},
};
