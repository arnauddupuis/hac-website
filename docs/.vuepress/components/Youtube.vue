<template>
    <div class="videoWrapper">
        <iframe class="fluid-iframe" width="560" height="349" :src="url" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</template>

<script>
export default {
    props: ['url']
}
</script>