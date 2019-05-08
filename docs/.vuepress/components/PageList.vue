// The idea here is to make a configurable component that can display a list of markdown files modulo certain factors like the name or tags
<template>
<div>
	<!-- <div class="hac_card_container">
		<div class='hac_card'>
			Test 1
		</div>
		<div class='hac_card'>
			Test 2
		</div>
	</div> -->
    <div v-for="p in recentFiles" class="theorem custom-block" v-if="p.path.includes(folder) && p.path !== folder">
        <img :src='p.frontmatter.cover' class='cover' v-if='("cover" in p.frontmatter)'>
        <p class="custom-block-title"> <p :class="p.frontmatter.icon"  v-if='("icon" in p.frontmatter)'></p> <a :href='p.path'>{{p.title}}</a></p>
        <p>{{p.frontmatter.description}}</p>
    </div>
	<div class="nothing" v-if='recentFiles.length === 0'>
		There is nothing here yet.
	</div>
</div>
</template>

<script>
export default {
	data() {
		return {};
	}, 
	props: {
		folder: String
	},
	computed:{
		// Source for the recentFiles base function: https://www.raymondcamden.com/2018/05/09/adding-a-recent-content-component-to-vuepress
		recentFiles() {
			let files = this.$site.pages.filter(p => {
				return p.path.indexOf(this.folder) >= 0 && p.frontmatter.published == true;
			}).sort((a,b) => {
                let aDate = new Date(a.frontmatter.lastUpdated).getTime();
                let bDate = new Date(b.frontmatter.lastUpdated).getTime();
                let diff = aDate - bDate;
				if(diff > 0) return -1;
				if(diff < 0) return 1;
				return 0;
			}).slice(0,5);
			console.log(files.length)
			return files;
		}
	}
}
</script>

<style scoped>
.fas, .far {
    color: #3eaf7c;
    font-size: 24px;
    padding-right: 0.4rem
}

/* .hac_card_container {
	display: flex
}
.hac_card {
  	width: 50%;
	height: 20rem;
	background-color: #ff0000;
  	border-radius: 0.4rem;
	padding: 0.4rem;
	margin: 0.1rem;
} */
</style>