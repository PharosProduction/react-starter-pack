if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
  const Dotenv = require('dotenv-webpack')

  module.exports = {
    publicRuntimeConfig: process.env,
    serverRuntimeConfig: process.env,
    webpack: (config) => {
      config.externals = config.externals || []
      config.externals.push('fs')
      config.plugins.push(new Dotenv())

      return config
    }
  }
} else {
  module.exports = {
    publicRuntimeConfig: process.env,
    serverRuntimeConfig: process.env,
    webpack: (config, { dev }) => {
      config.devtool = 'source-map'

      for (const plugin of config.plugins) {
        if (plugin['constructor']['name'] === 'UglifyJsPlugin') {
          plugin.options.sourceMap = true
          break
        }
      }

      return config
    }
  }
}