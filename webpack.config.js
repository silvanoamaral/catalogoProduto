module.exports = {
	context: __dirname + "/src",
	entry: {
		app: "./app.js"
	},
	output: {
		path: __dirname + "/build",
		filename: "[name].bundle.js",
	},
	module: {
	    loaders: [
		    {
		        test: /\.js$/, //Leia qualquer arquivo .js
		        exclude: /node_modules/, //Não vai ler os node_modules
		        loader: 'babel-loader', //defino o babel como meu loader
		        query: {
		            presets: ['es2015']
		        }
		    }
	    ],
	    rules: [{
            test: /\.scss$/,
            exclude: /node_modules/, //Não vai ler os node_modules
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }]
	},
	devServer: {
	    inline: true,
	    contentBase: '.',
	    port: 3333
	}
};