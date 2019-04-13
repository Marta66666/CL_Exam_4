const path = require("path");

module.exports = {
    entry: "./js/task01.js",
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, "build")
    },
    watch: true,
    mode: "production",
    module: {
        rules: [

            // Obsługa plików React JS
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        "plugins": [
                            ["@babel/plugin-proposal-class-properties", { "loose": true }]
                        ],
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            }
        ]
    }
};