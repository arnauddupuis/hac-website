<template>
    <div>
        <div class="overview custom-block">
            <div class="subtitle"> <p class="fas fa-chevron-circle-right"></p> Overview</div>
            <p class='content_text'>{{ overview }}</p>
        </div>
        <div class='rating'>
            <div
            id="rating_bubble"
            data-preset="bubble"
            class="ldBar label-center"
            :data-value=score
            data-fill='/images/site/saturn-pattern.svg'
            data-pattern-size="64"
            style="width:20rem;height:20rem"
            data-min="0" data-max="5"
            ></div>

            <div id="info">
                <div class='eval'>
                    <p class='subtitle'>Kids/Non-astronomers ({{kid_score}} / 5): </p><p class='content_text'> {{kid_eval}} </p>
                </div>
                <div class='eval'>
                    <p class='subtitle'>Wow! factor ({{wow_score}} / 5): </p><p class='content_text'> {{wow_eval}} </p>
                </div>
                <div class='eval'>
                    <p class='subtitle'>Accessibility ({{accessibility_score}} / 5): </p><p class='content_text'> {{accessibility_eval}} </p>
                </div>
            </div>
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
            var bar1 = new ldBar("#rating_bubble");
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

.fas, .far {
    color: white;
    font-size: 24px;
    padding-right: 0.4rem
}

.rating {
    margin: 0.1rem 0;
    padding: .1rem 1.5rem;
    border-radius: 0.4rem;
    background-color: #114272;
    display: flex;
}

.overview {
    margin: 0.1rem 0;
    padding: .1rem 1.5rem;
    border-radius: 0.4rem;
    background-color: #05192c;
    color: white;
    display: block;
}

.content_text{
    margin-top: -0.4rem;
}

#rating_bubble {
    padding: 0.4rem;
}

.ldBar-label {
    color: white;
    font-weight: bold;
    font-size: 30px;
}
.ldBar-label:after {
    content: "";
}

#info {
    color: white;
    padding-left: 2rem;
}

.subtitle {
    font-weight: bold;
    font-size: 20px;
}

</style>
