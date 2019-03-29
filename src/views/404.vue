<template>
    <div>
        <div class="jumbotron bg-danger text-white text-center">
            <h2 class="lead display-3"> <i class="fas fa-fire-alt"></i> PAGE NOT FOUND <i class="fas fa-fire-alt"></i></h2>
        </div>
        <div class="container-fluid">
            <div class="row mt-5">
                <div class="col text-center">
                    <button class="btn btn-outline-danger btn-lg" @click="goHome"> <i class="fas fa-home"></i> Get the hell out of here! </button>
                </div>
            </div>
        </div>
    </div>
    

</template>

<script>

export default {
    name: 'page-not-found',
    methods: {
        goHome(){
            window.location.href = '/'
        }
    },
}
</script>