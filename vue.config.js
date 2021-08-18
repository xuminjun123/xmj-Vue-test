"use strict";
const webpack = require("webpack");
const path = require("path");
// public/index.html 中引入了静态资源，但是打包的时候 webpack 并不会帮我们拷贝到 dist 目录，
// 因此 copy-webpack-plugin 就可以很好地帮我做拷贝的工作了。
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CompressionWebpackPlugin = require('compression-webpack-plugin'); // gzip 压缩

// const HtmlWebpackPlugin = require('html-webpack-plugin'); // 生成 html 文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 用于在打包前清理上一次项目生成的 bundle 文件

// const PurifyCssWebpack = require('purifycss-webpack') // 去除生产环境重复css
// const glob = require('glob') // 引入glob模块,用于扫描全部html文件中所引用的css

// const PrerenderSPAPlugin = require('prerender-spa-plugin') // 将静态HTML预渲染到单页应用程序中。

const productionGzipExtensions = [
  "js",
  "css",
  "svg",
  "woff",
  "ttf",
  "json",
  "html"
];

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

  configureWebpack: {
    resolve: {
      alias: {
        "~": resolve("public"),
        "@": resolve("src"),
        // 'cesium': path.resolve(__dirname, '../node_modules/cesium/Source')
      },
    },
    amd: {
      // cesium 2
      toUrlUndefined: true
    },
    module: {
      // cesium 3 不加这个配置会报require引入警告
      unknownContextCritical: false
    },

    plugins: [

      new webpack.ProvidePlugin({
        introJs: ['intro.js','introJs']
      }),
      // new HtmlWebpackPlugin({
      //   filename: 'index.html',
      //   template: path.join(__dirname, '/index.html'),
      //   minify: {
      //     // 压缩HTML文件
      //     removeComments: true, // 移除HTML中的注释
      //     collapseWhitespace: true, // 删除空白符与换行符
      //     minifyCSS: true, // 压缩内联css
      //   },
      //   inject: true,
      // }),

      // new CleanWebpackPlugin(), // 所要清理的文件夹名称

      // new PrerenderSPAPlugin({  // 预渲染
      //   // 必需的——指向webpack输出应用程序的prerender路径。
      //   staticDir: path.join(__dirname, 'dist'),
      //   // 必需的 - Routes to render.
      //   routes: ['/login', '/dashboard', '/animate/bounce', "/audio/audioTest","/backTop/backTopTest"],
      // }),


      // new webpack.HotModuleReplacementPlugin(), // 热更新插件 (webpack自带)

      // new PurifyCssWebpack({
      //   paths: glob.sync(path.join(__dirname, 'src/*.html')),
      // }),

      //开启gzip压缩
      new CompressionWebpackPlugin({
        filename: "[path].gz[query]",
        test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),  // 匹配文件名
        threshold: 10240,   // 对于 超过10K的数据进行压缩
        minRatio: 0.8, //压缩率大于0.8的才压缩
        deleteOriginalAssets: false //是否删除原文件
      }),

      new CopyWebpackPlugin([
        {
          from: 'public/js/*.js',
          to: path.resolve(__dirname, 'dist', 'js'),
          flatten: true,
        },
      ]),


      new CopyWebpackPlugin([
        {
          from: 'node_modules/cesium/Build/Cesium/Workers',
          to: 'cesium/Workers'
        }
      ]),
      new CopyWebpackPlugin([
        {
          from: 'node_modules/cesium/Build/Cesium/ThirdParty',
          to: 'cesium/ThirdParty'
        }
      ]),
      new CopyWebpackPlugin([
        { from: 'node_modules/cesium/Build/Cesium/Assets', to: 'cesium/Assets' }
      ]),
      new CopyWebpackPlugin([
        {
          from: 'node_modules/cesium/Build/Cesium/Widgets',
          to: 'cesium/Widgets'
        }
      ]),
      new webpack.DefinePlugin({
        // Define relative base path in cesium for loading assets
        CESIUM_BASE_URL: JSON.stringify('./')
      })
    ],
    module: {
      unknownContextCritical: false
    }
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
            // runtime '必须与runtimeChunk名称相同。 默认是“运行时  
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
            chunks: "initial", // only package third parties that are initially dependent 只包最初依赖的第三方  
          },
          elementUI: {
            name: "chunk-elementUI", // split elementUI into a single package 将elementUI拆分为单个包
            priority: 20, // 重量需要大于libs和app，否则会被打包成libs或app  
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/, // in order to adapt to cnpm 为了适应CNPM  
          },
          commons: {
            name: "chunk-commons",
            test: resolve("src/components"), // can customize your rules 可以定制你的规则
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
