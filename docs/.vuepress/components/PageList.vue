// The idea here is to make a configurable component that can display a list of markdown files modulo certain factors like the name or tags
<template>
<div>
    <div v-for="p in recentFiles" class="theorem custom-block" v-if="p.path.includes('/news/') && p.path !== '/news/'">
        <img :src='p.frontmatter.cover' class='cover' v-if='("cover" in p.frontmatter)'>
        <p class="custom-block-title"><a :href='p.path'>{{p.title}}</a></p>
        <p>{{p.frontmatter.description}}</p>
    </div>
</div>
</template>

<script>
export default {
	data() {
		return {};
	}, 
	computed:{
		recentFiles() {
			let files = this.$site.pages.filter(p => {
				return p.path.indexOf('/news/') >= 0;
			}).sort((a,b) => {
                let aDate = new Date(a.frontmatter.lastUpdated).getTime();
                let bDate = new Date(b.frontmatter.lastUpdated).getTime();
                let diff = aDate - bDate;
				if(diff > 0) return -1;
				if(diff < 0) return 1;
				return 0;
			}).slice(0,5);

			return files;
		}
	}
}
</script>

