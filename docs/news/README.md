---
title: Blog
lang: en-US
lastUpdated: 2019-04-25 10:02:36
meta:
  - name: Blog
    content: Blog posts will be here
  - name: keywords
    content: hyrule astronomy club hac-game-lib python 
---

# News :newspaper_roll:


<!-- <div v-for="p in $site.pages.sort( function(a,b){(a.frontmatter.sortOrder < b.frontmatter.sortOrder) ? -1 : 1} )" class="theorem custom-block" v-if="p.path.includes('/news/') && p.path !== '/news/'">
    <img :src='p.frontmatter.cover' class='cover' v-if='("cover" in p.frontmatter)'>
    <p class="custom-block-title"><a :href='p.path'>{{p.title}}</a></p>
    <p>{{p.frontmatter.description}}</p>
    <p>Updated: {{p.frontmatter.sortOrder}}</p>
</div> -->

<newsList></newsList>

