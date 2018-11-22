<template>
    <section>
        <discogs-navigation></discogs-navigation>
        <p>
            Examples:
        </p>
        <ul>
            <li v-for="artist in artists">
                <router-link :to="{ name: 'discogs-artist', params: { id: artist.id }}">
                    {{ artist.name }}
                </router-link>
            </li>
        </ul>
    </section>
</template>

<script>
    import DiscogsNavigation from './DiscogsNavigation'

    export default {
        components: {
            DiscogsNavigation
        },

        data() {
            return {
                artists: [
                    {
                        id: 125246,
                        name: 'Nirvana',
                    },
                    {
                        id: 12596,
                        name: 'James Brown',
                    },
                    {
                        id: 81013,
                        name: 'Queen',
                    },
                    {
                        id: 1601721,
                        name: 'LaBrassBanda',
                    },
                    {
                        id: 3310737,
                        name: 'Ariana Grande',
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    ul {
        margin-left: 40%;
    }

    li {
        text-align: left;
    }
</style>
