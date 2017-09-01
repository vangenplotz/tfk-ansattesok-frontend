import path from "path"
import ExtractTextPlugin from "extract-text-webpack-plugin"
import HtmlWebpackPlugin from "html-webpack-plugin"

export default {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'src'),
		publicPath: '/',
		filename: 'application.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'postcss-loader', 'sass-loader']
				})
			},
			{
				test: /\.(jpe?g|png|gif|bmp|svg|ico)$/i,
				exclude: /node_modules/,
				use: [
					{
						loader: 'file-loader',
						options: {
							hash: 'sha512',
							digest: 'hex',
							name: '[name].[ext]'
						}
					}
				]
			},
			{
				test: /\.css/i,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'postcss-loader']
				})
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/i,
				exclude: /node_modules/,
				use: [
					{
						loader: 'file-loader',
						options: {
							hash: 'sha512',
							digest: 'hex',
							name: '[name].[ext]'
						}
					}
				]
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('application.css'),
		new HtmlWebpackPlugin({
			title: 'Telemark Fylkeskommune',
			template: path.join(__dirname, 'assets/html/index.ejs'),
			favicon: path.join(__dirname, 'assets/images/favicon.ico')
		})
	],
	devServer: {
		disableHostCheck: true,
		proxy: {
			'/api/**': {
				target: 'http://api:3000',
				pathRewrite: { '^/api': '' }
			}
		}
	}
}
