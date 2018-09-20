var webpack = require("webpack");
var path = require("path");


module.exports = {
    entry: "./dist/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "../CV Builder/Scripts")
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".js"]
    },

    module: {
        /*loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

        ],*/

/*        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]*/
    
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    plugins: [
        new webpack.ProvidePlugin({
            'Promise':
                "es6-promise", // Thanks Aaron (https://gist.github.com/Couto/b29676dd1ab8714a818f#gistcomment-1584602)
        })
    ],
    devServer: {
        inline: true,
        contentBase: "wwwroot"
    }
};