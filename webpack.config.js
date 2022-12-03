const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "build"),
        },
        port: 8000,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            additionalData: "@import'./src/config/GlobalVariables.scss';"
                        }
                    }
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name].[hash][ext][query]'
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 4096   // maximum size of image (bytes) before it is converted to base64
                    },
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name].[hash][ext][query]'
                },
            },
        ],
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
        alias: {
            assets: path.resolve(__dirname, "src", "assets"),
            components: path.resolve(__dirname, "src", "components"),
            config: path.resolve(__dirname, "src", "config"),
            context: path.resolve(__dirname, "src", "context"),
            projects: path.resolve(__dirname, "src", "projects"),
        }
    }
};