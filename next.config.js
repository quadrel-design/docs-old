const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const repoName = 'DEIN-REPO-NAME' // <- ändere das zu deinem GitHub-Repo-Namen

module.exports = {
  ...withNextra(),
  output: 'export',
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  trailingSlash: true,
}

