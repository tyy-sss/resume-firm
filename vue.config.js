const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 跨域问题
  devServer: {
    port: 8081,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8085", //'服务器真实地址',
        changeOrigin: true, // 是否跨域
      },
    },
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
      }),
    ],
    module: {
      rules: [
        {
          test: /\.pdf$/,
          use: "file-loader",
        },
      ],
    },
  },
});
