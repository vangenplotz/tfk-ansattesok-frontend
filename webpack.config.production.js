import path from "path"
import ExtractTextPlugin from "extract-text-webpack-plugin"
import HtmlWebpackPlugin from "html-webpack-plugin"

export default {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '/',
		filename: 'application-[hash].min.js'
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
		new ExtractTextPlugin('application-[hash].min.css'),
		new HtmlWebpackPlugin({
			title: 'Telemark Fylkeskommune',
			template: path.join(__dirname, 'assets/html/index.production.ejs'),
			favicon: path.join(__dirname, 'assets/images/favicon.ico')
		})
	],
	externals: {
		"axios":"axios",
		"react":"React",
		"react-dom":"ReactDOM",
		"prop-types":"PropTypes",
		"react-redux":"ReactRedux",
		"react-router":"ReactRouter",
		"react-router-redux":"ReactRouterRedux",
		"redux":"Redux",
		"redux-thunk":"ReduxThunk",
		"semantic-ui-react":"semanticUIReact"
	}
}
