import theme from 'nextra-theme-docs'

const repo = 'docs'

export default theme({
  themeConfig: './theme.config.tsx',
})({
  output: 'export',
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  trailingSlash: true,
})
