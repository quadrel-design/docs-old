import { withTheme } from 'nextra-theme-docs'

const repo = 'docs'

export default withTheme({
  themeConfig: './theme.config.tsx',
  // Optional:
  // search: { placeholder: 'Suchen...' },
  // i18n: [{ locale: 'de', text: 'Deutsch' }]
})({
  output: 'export',
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  trailingSlash: true,
})
