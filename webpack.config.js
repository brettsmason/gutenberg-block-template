const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		block: ['./src/block.js', './src/block.scss']
	},
	output: {
		path: __dirname + '/dist',
		filename: '[name].build.js',
	},
	module: {
		loaders: [
			{
				test: /.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.scss$/,
				use: ExtractTextWebpackPlugin.extract({
					use: [
						{
							loader: 'css-loader',
						},
						{
							loader: 'sass-loader',
						}
					]
				})
			},
		],
	},
	plugins: [
		new ExtractTextWebpackPlugin({filename: '[name].build.css', allChunks: true}),
	]
};