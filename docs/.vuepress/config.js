module.exports = {
  title: 'Modespr\'s blog',
  description: '我的个人网站',
  head: [
    ['link', { rel: 'icon', href: '/images/logo.png' }],
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav: [ // 导航栏配置
      { text: 'Git', link: '/git' }
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  }
};