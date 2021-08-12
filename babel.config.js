
// 所有生产环境
const prodPlugin = []
if (process.env.NODE_ENV === 'production') {
  // 如果是生产环境，则自动清理掉打印的日志，但保留error 与 warn
  prodPlugin.push([
    'transform-remove-console',
    {
      // 保留 console.error 与 console.warn
      exclude: ['error', 'warn']
    }
  ])
}


module.exports = {
  presets: [
    // https://github.com/vuejs/vue-cli/tree/master/packages/@vue/babel-preset-app
    '@vue/cli-plugin-babel/preset'
  ],
  'env': {
    'development': {
      // babel-plugin-dynamic-import-node plugin只做一件事，将所有import()转换为require()。  
      //这个插件可以显著提高热更新的速度，当你有大量的页面。  
      'plugins': ['dynamic-import-node']
    }
  },
  plugins: [
    [
      'import',
      {
        'libraryName': 'vxe-table',
        'style': true
      }
    ],
    // 'transform-remove-console'  // 去除console
  ]
}
