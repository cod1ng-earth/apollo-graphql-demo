<template>
    <section class="ytPlayer" v-if="videoId">
        <iframe :src="'https://www.youtube.com/embed/' + videoId"
                id="ytplayer"
                type="text/html"
                width="300"
                height="168.75"
                frameborder="0"
                allowfullscreen>
        </iframe>
    </section>
</template>

<script>
    export default {

        props: {
            videoId: {
                type: String,
                required: true,
            }
        },
    }

</script>

<style scoped>
    .ytPlayer {
        float: left;
        margin: 10px;
    }
</style>
