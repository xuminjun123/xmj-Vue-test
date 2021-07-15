"use strict";
const webpack = require("webpack");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
function resolve(dir) {
  return path.join(__dirname, dir);
}


const port = process.env.port || process.env.npm_config_port || 80 // 端口

// vue.config.js 配置说明
//官方vue.config.js 参考文档 https://cli.vuejs.org/zh/config/#css-loaderoptions
// 这里只列一部分，具体配置参考文档
module.exports = {
  // 部署生产环境和开发环境下的URL。
  // 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上
  // 例如 https://www.ruoyi.vip/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.ruoyi.vip/admin/，则设置 baseUrl 为 /admin/。
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  // 在npm run build 或 yarn build 时 ，生成文件的目录名称（要和baseUrl的生产环境路径一致）（默认dist）
  outputDir: "dist",
  // 用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
  assetsDir: "static",
  // 是否开启eslint保存检测，有效值：ture | false | 'error'
  //   lintOnSave: process.env.NODE_ENV === "development",
  lintOnSave: false,
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
  // webpack-dev-server 相关配置
  devServer: {
    host: "0.0.0.0",
    port: port,
    open: true,
    proxy: {
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_BASE_API]: {
        target: `http://localhost:8081`,
        changeOrigin: true,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: ""
        }
      }
    },
    disableHostCheck: true,
  },
  // configureWebpack: (config) => {
  //   let plugins = []
  //   if (process.env.NODE_ENV === 'production') {
  //     plugins = [
  //       new webpack.DefinePlugin({
  //         CESIUM_BASE_URL: JSON.stringify('static')
  //       }),
  //       new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'Workers'), to: 'static/Workers' }]),
  //       new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'Assets'), to: 'static/Assets' }]),
  //       new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'ThirdParty'), to: 'static/ThirdParty' }]),
  //       new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'Widgets'), to: 'static/Widgets' }])
  //     ]
  //   } else {
  //     plugins = [
  //       new webpack.DefinePlugin({
  //         CESIUM_BASE_URL: JSON.stringify('')
  //       }),
  //       new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'Workers'), to: 'Workers' }]),
  //       new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'Assets'), to: 'Assets' }]),
  //       new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'ThirdParty'), to: 'ThirdParty' }]),
  //       new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'Widgets'), to: 'Widgets' }])
  //     ]
  //   }
  //   return {
  //     module: {
  //       unknownContextCritical: false,
  //       rules: [
  //         {
  //           test: /\.js$/,
  //           enforce: 'pre',
  //           include: path.resolve(__dirname, 'node_modules/cesium/Source'),
  //           sideEffects: false,
  //           use: [
  //             {
  //               loader: 'strip-pragma-loader',
  //               options: {
  //                 pragmas: {
  //                   debug: false
  //                 }
  //               }
  //             }
  //           ]
  //         }
  //       ]
  //     },
  //     optimization: {
  //       usedExports: true,
  //       splitChunks: {
  //         maxInitialRequests: Infinity,
  //         minSize: 0,
  //         maxSize: 250000,
  //         cacheGroups: {
  //           vendor: {
  //             test: /[\\/]node_modules[\\/]/,
  //             priority: -10,
  //             chunks: 'all',
  //             name(module) {
  //               const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
  //               return `npm.${packageName.replace('@', '')}`
  //             }
  //           },
  //           commons: {
  //             name: 'Cesium',
  //             test: /[\\/]node_modules[\\/]cesium/,
  //             priority: 10,
  //             chunks: 'all'
  //           }
  //         }
  //       }
  //     },
  //     output: {
  //       sourcePrefix: ' '
  //     },
  //     amd: {
  //       toUrlUndefined: true
  //     },
  //     resolve: {
  //       alias: {
  //         '@': path.resolve('src')
  //       }
  //     },
  //     node: {
  //       fs: 'empty',
  //       Buffer: false,
  //       http: 'empty',
  //       https: 'empty',
  //       zlib: 'empty'
  //     },
  //     plugins: plugins
  //   }
  // },

  configureWebpack: {
    // name: name,
    externals: {
      //   vue: 'Vue',
      //   'vue-router': 'VueRouter',
      //   vuex: 'vue',
      //   'element-ui': 'ELEMENT'
    },
    resolve: {
      alias: {
        "~": resolve("public"),
        "@": resolve("src"),
        cesium: path.resolve(__dirname, '../node_modules/cesium/Source')
      },
    },

    plugins: [
      // Copy Cesium Assets, Widgets, and Workers to a static directory
      new CopyWebpackPlugin([{ from: path.join('node_modules/cesium/Source', '../Build/Cesium/Workers'), to: 'Workers' }]),
      new CopyWebpackPlugin([{ from: path.join('node_modules/cesium/Source', 'Assets'), to: 'Assets' }]),
      new CopyWebpackPlugin([{ from: path.join('node_modules/cesium/Source', 'Widgets'), to: 'Widgets' }]),
      new webpack.DefinePlugin({
        // Define relative base path in cesium for loading assets
        CESIUM_BASE_URL: JSON.stringify('')
      })
    ],

  },
  chainWebpack(config) {
    config.plugins.delete("preload"); // TODO: need test
    config.plugins.delete("prefetch"); // TODO: need test

    // set svg-sprite-loader /
    /**  */
    config.module.rule("svg").exclude.add(resolve("src/assets/icons")).end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/assets/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();

    config.when(process.env.NODE_ENV !== "development", (config) => {
      config
        .plugin("ScriptExtHtmlWebpackPlugin")
        .after("html")
        .use("script-ext-html-webpack-plugin", [
          {
            // `runtime` must same as runtimeChunk name. default is `runtime`
            inline: /runtime\..*\.js$/,
          },
        ])
        .end();
      config.optimization.splitChunks({
        chunks: "all",
        cacheGroups: {
          libs: {
            name: "chunk-libs",
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: "initial", // only package third parties that are initially dependent
          },
          elementUI: {
            name: "chunk-elementUI", // split elementUI into a single package
            priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/, // in order to adapt to cnpm
          },
          commons: {
            name: "chunk-commons",
            test: resolve("src/components"), // can customize your rules
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      });
      config.optimization.runtimeChunk("single"),
      {
        from: path.resolve(__dirname, "./public/robots.txt"), //防爬虫文件
        to: "./", //到根目录下
      };
    });
  },
};
