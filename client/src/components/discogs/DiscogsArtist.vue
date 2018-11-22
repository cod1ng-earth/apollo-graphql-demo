<template>
    <section v-if="artist">
        <discogs-navigation></discogs-navigation>
        <h1>Artist: {{ artist.name }}</h1>
        <p>
            {{ artist.profile }}
        </p>
        <ul>
            <li v-for="url in artist.urls">
                <a :href="url" target="_blank">{{ url }}</a>
            </li>
        </ul>
    </section>
</template>

<script>
    import DiscogsNavigation from './DiscogsNavigation'
    import gql from 'graphql-tag'

    export default {
        props: {
            id: {
                type: String
            }
        },

        components: {
            DiscogsNavigation
        },

        apollo: {
            artist: {
                query: gql`
query Artist($id: Int!) {
    artist(artistId: $id) {
        id
        name
        profile
        urls
    }
}
                `,
                variables() {
                    return {
                        id: parseInt(this.id),
                    }
                }
            },
        }
    }
</script>

<style scoped>
    p, li {
        text-align: left;
    }

    p {
        margin: 1em;
    }
</style>
