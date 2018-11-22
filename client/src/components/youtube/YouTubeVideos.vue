<template>
    <section v-if="search">
        <you-tube-player-embedded v-for="video in videos"
                                  :video-id="video.id.videoId"
        >
        </you-tube-player-embedded>
    </section>
</template>

<script>
    import YouTubePlayerEmbedded from './YouTubePlayerEmbedded'
    import gql from 'graphql-tag'

    export default {

        props: {
            searchTerm: {
                type: String,
                required: true,
            }
        },

        components: {
            YouTubePlayerEmbedded
        },

        computed: {
            videos() {
                return this.search.items;
            }
        },

        apollo: {
            search: {
                query: gql`
query YouTubeSearch($term: String!) {
    search(searchTerm: $term) {
        items {
            id {
                videoId
            }
            snippet {
                title
            }
        }
    }
}
                `,
                variables() {
                    return {
                        term: this.searchTerm,
                    }
                }
            },
        }
    }

</script>
