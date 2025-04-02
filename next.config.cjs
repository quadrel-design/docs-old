const theme = require('nextra-theme-docs')

const repo = 'docs'

module.exports = theme({
  themeConfig: './theme.config.tsx',
})({
  output: 'export',
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  trailingSlash: true,
})
