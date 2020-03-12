const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
						options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
				'file-loader',
				],
			},
			
		],
	},
	output: {
		path: path.resolve(__dirname, './src/dist')
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html'
		})
	]
}
