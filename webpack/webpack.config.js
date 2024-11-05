const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const BUILD_DIR = path.resolve(__dirname, "..", "build");
const APP_DIR = path.resolve(__dirname, "..", "main");
const TSCONFIG_DIR = path.resolve(__dirname, "..", "typescript", "tsconfig.main.json");

const config = {
    entry: path.join(APP_DIR, "index.ts"),
    mode: "production",
    target: "electron-main",
    output: {
        filename: "index.js",
        path: BUILD_DIR,
    },
    node: {
        __dirname: false,
    },
    resolve: {
        extensions: [".ts"],
        plugins: [
            new TsconfigPathsPlugin(
                {
                    configFile: TSCONFIG_DIR,
                },
            ),
        ],
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: [{
                loader: "ts-loader",
                options: {
                    configFile: TSCONFIG_DIR,
                },
            }],
        }],
    },
};

module.exports = config;
