module.exports = {
    context: __dirname,
    devtool: "inline-sourcemap",
    entry: './main.js',
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test:/.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel"
            },
        ]
    }
};

// $ webpack -w with PHP/MySQL running in the background