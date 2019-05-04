module.exports = {
    title: 'Hyrule Astronomy Club',
    description: 'Website currently in development',
    head: [
      ['link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css'}],
      ['link', { rel: 'stylesheet', href: '/css/loading-bar.css'}],
      ['link', { rel: 'stylesheet', href: "https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"}],
      ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    plugins: [
      [ 
        '@vuepress/google-analytics',
        {
          'ga': 'UA-138705985-1' // UA-00000000-0
        }
      ],
      ['@vuepress/pwa', {
         serviceWorker: true,
         updatePopup: {
           message: "Hyrule Astronomy Club has been updated!",
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
        { text: 'News 🗞', link: '/news/' },
        { text: 'Guides 📚', link: '/guides/', 
          items: [
            {text: 'hac-game-lib', link: '/guides/hac-game-lib/' },
            {text: 'Astronomy', link: '/guides/astronomy/' },
            {text: 'Misc.', link: '/guides/misc/' },
          ]
        },
        {
          text: 'hac-game-lib',
          items: [
            { text: 'Introduction', link: '/hac-game-lib' },
            { text: 'Guides 📚', link: '/guides/hac-game-lib/' },
            { text: 'Official documentation (ReadTheDocs)', link: 'https://hac-game-lib.readthedocs.io/en/latest/' },
            { text: 'Sources (GitHub)', link: 'https://github.com/arnauddupuis/hac-game-lib' }
          ]
        }
      ],
      lastUpdated: 'Last Updated',
    },
    'sitemap': {
      hostname: 'https://astro.hyrul.es',
      outFile: 'hac-sitemap.xml'
    },
    markdown: {
      toc: { includeLevel: [1, 2, 3] }
    }
  }