module.exports = {
    title: 'Hyrule Astronomy Club',
    description: 'Website currently in development',
    head: [
      ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Material+Icons' }],
      ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    plugins: [
      ['@vuepress/pwa', {
         serviceWorker: true,
         updatePopup: {
           message: "New content is available.",
           buttonText: "Refresh"
         }
       }
      ],
      ['container', {
        type: 'theorem',
        before: info => `<div class="theorem"><p class="title">${info}</p>`,
        after: '</div>',
      }],
    ],
    themeConfig: {
      nav: [
        { text: 'Home 🚀', link: '/' },
        { text: 'Documentation 📚', link: '/documentation/' },
        { text: 'News 🗞', link: '/news/' },
        {
          text: 'hac-game-lib',
          items: [
            { text: 'Guides 📚', link: '/documentation/' },
            { text: 'Official documentation (ReadTheDocs)', link: 'https://hac-game-lib.readthedocs.io/en/latest/' },
            { text: 'Sources (GitHub)', link: 'https://github.com/arnauddupuis/hac-game-lib' }
          ]
        }
      ]
    },
    markdown: {
      toc: { includeLevel: [1, 2, 3] }
    }
  }