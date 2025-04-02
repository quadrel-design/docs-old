const theme = require('nextra-theme-docs')

module.exports = theme({
  themeConfig: './theme.config.tsx',
})({
  output: 'export',
  trailingSlash: true
})
