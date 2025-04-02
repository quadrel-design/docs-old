import type { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Quadrel Docs</span>,
  project: {
    link: 'https://github.com/quadrel-design/docs',
  },
  docsRepositoryBase: 'https://github.com/quadrel-design/docs/blob/main',
  footer: {
    text: '© 2025 Quadrel Docs',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Quadrel Docs',
    }
  }
}

export default config
