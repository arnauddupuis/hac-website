<template>
    <div class='rating'>

        <!-- <div class="container">
            <div class="progress vertical">
                <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width: 40%;" max="5" :value="score">
                </div>  
                <progress class="progress-bar" style="width: 100%; height: 40px;" max="5" :value="score"> {{score}} </progress>
            </div>
        </div> -->

        <div
        id="myItem1"
        data-preset="bubble"
        class="ldBar label-center"
        :data-value=score
        data-fill='/images/site/saturn-pattern.svg'
        data-pattern-size="64"
        style="width:20%;height:20%"
        data-min="0" data-max="5"
        ></div>

        <div id="info">
        </div>
    </div>
</template>

<script>

export default {
    props: {
        'kid_score': Number,
        'wow_score': Number,
        'accessibility_score': Number,
        'overview': String,
        'kid_eval': String,
        'wow_eval': String,
        'accessibility_eval': String
        },
    computed: {
        score(){
            var number = (this.kid_score+this.wow_score+this.accessibility_score)/3;
            var rounded = Math.round( number * 10 ) / 10;
            console.log(this.kid_score+this.wow_score+this.accessibility_score)
            return rounded;
        }
    },
    methods: {
        initProgress: function(){
            var bar1 = new ldBar("#myItem1");
        }
    },
    mounted () {
        import('./loading-bar.js').then(module => {
        // use code
            this.initProgress()
        })
    },
    data() {
        return {};
    }
}
</script>

<style>
.rating {
    margin: 1rem 0;
    padding: .1rem 1.5rem;
    border-radius: 0.4rem;
    background-color: #114272;
}
.ldBar-label {
    color: white;
}
.ldBar-label:after {
    content: "/5";
  }

</style>
