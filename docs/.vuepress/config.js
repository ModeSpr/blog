/**
 * 配置文件 https://vuepress.vuejs.org/zh/config/
 */
module.exports = {
  title: "Modespr's blog",
  description: '我的个人网站',
  head: [
    ['link', { rel: 'icon', href: '/images/logo.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/blog/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    // 导航栏配置 https://vuepress.vuejs.org/zh/theme/default-theme-config.html#导航栏
    nav: [
      { text: '首页', link: '/' },
      {
        text: 'Git',
        items: [
          { text: '常用', link: '/git/index' },
          { text: '规范', link: '/git/git提交规范' },
          { text: 'API', link: '/git/git-API' },
          { text: '常见问题', link: '/git/git常见问题' }
        ]
      },
      {
        text: '前端',
        items: [
          { text: 'nodejs', link: '/front-end/nodejs' },
          { text: 'npm', link: '/front-end/npm' }
        ]
      },
      {
        text: 'DNS',
        items: [{ text: '国内常用公共 DNS 服务', link: '/dns/dns' }]
      }
    ],
    // navbar: false,
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2 // 侧边栏显示2级
  }
}
