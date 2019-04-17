module.exports = {
    title: 'Hyrule Astronomy Club',
    description: 'Website currently in development',
    head: [
      ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Material+Icons' }],
    ],
    serviceWorker: true,
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Documentation', link: '/documentation/', icon: 'books' },
        { text: 'News', link: '/news/' },
      ]
    },
    markdown: {
      toc: { includeLevel: [1, 2, 3] }
    }
  }