---
title: Blog
lang: en-US
meta:
  - name: Blog
    content: Blog posts will be here
  - name: keywords
    content: hyrule astronomy club hac-game-lib python 
---

# News :newspaper_roll:


<div v-for="p in $site.pages.sort( function(a,b){(a.lastUpdated < b.lastUpdated) ? -1 : 1} )" class="theorem custom-block" v-if="p.path.includes('/news/') && p.path !== '/news/'">
    <p class="custom-block-title"><a :href='p.path'>{{p.title}}</a></p>
    <p>{{p.frontmatter.description}}</p>
</div>