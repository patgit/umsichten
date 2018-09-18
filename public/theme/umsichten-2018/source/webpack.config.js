const path = require('path');

module.exports = {
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	entry: ['./js/app.js', './scss/theme.scss'],
	output: {
		path: path.resolve(__dirname, './../dist'),
		filename: 'js/app.js',
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'css/theme.css'
						}
					},
					{
						loader: 'extract-loader'
					},
					{
						loader: 'css-loader?-url'
					},
					// {
					// 	loader: 'resolve-url-loader'
					// },
					{
						loader: 'postcss-loader'
					},
					{
						loader: 'sass-loader'
					}


					// {
					// 	loader: 'style-loader'
					// },
					// {
					// 	loader: 'css-loader'
					// },
					// {
						// loader: 'resolve-url-loader'
					// },
					// {
					// 	loader: 'sass-loader'
					// }
				]
			}
			,
			{
         test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
         use: [{
           loader: 'url-loader',
           options: {
             name: '[name].[ext]',
             outputPath: 'fonts/',    // where the fonts will go
             // publicPath: '../'       // override the default path
           }
         }]
       }
		]
	}
};