module.exports = {
    title: '个人主页',
    description: 'Personal Website',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/images/photo.jpeg' }],
        ['link', { rel: 'manifest', href: '/images/photo.jepg' }],
        ['link', { rel: 'apple-touch-icon', href: '/images/photo.jpeg' }],
        ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache' }],
        ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate' }],
        ['meta', { 'http-quiv': 'expires', cotent: '0' }]
    ],
    serviceWorker: true, // 是否开启 PWA
    base: '/', // 部署到github相关的配置
    markdown: {
        lineNumbers: true // 代码块是否显示行号
    },
    themeConfig: {
        nav: [ // 导航栏配置
            { text: '主页', link: '/base/' },
            { text: '前端', link: '/base/' },
            { text: '程序人生', link: '/base/' },
            { text: '算法', link: '/algorithm/' },
            { text: '诗和远方', link: '/others/' },
            { text: 'Github', link: 'https://github.com/qinjiujiu-pc' }
        ],
        sidebar: 'auto', // 侧边栏配置
        sidebarDepth: 2
    }
};