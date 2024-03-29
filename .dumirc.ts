import { defineConfig } from 'dumi';

export default defineConfig({
  // TODO 替换为新的 favicons
  favicons: ['https://cdn.jsdelivr.net/gh/riopop/images@main/112144929.png'],
  autoAlias: false,
  themeConfig: {
    // TODO 替换为新的的 name
    name: 'dumi-site-template',
    // TODO 替换为新的的 logo
    logo: 'https://cdn.jsdelivr.net/gh/riopop/images@main/112144929.png',
    prefersColor: { default: 'auto' },
    socialLinks: {
      github: 'https://github.com/riopop'
    },
    hd: { rules: [] },
    footer: 'Made with ❤️ by @riopop'
  },
  theme: {
    // TODO 替换为自己的主题色
    '@c-primary': '#13aa52',
  },
  analytics: {
    // TODO 替换为新的的 Google Analytics 代码
    // ga_v2: '',
  },
  sitemap: {
    // TODO 配置为新的域名
    hostname: 'https://riopop.js.org',
  },
  hash: true,
  exportStatic: {},
  ...(process.env.NODE_ENV === 'development' ? {} : { ssr: {} }),
  headScripts: [
    {src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7944221633776517', async: true, crossorigin: 'anonymous'},
  ]
});
