<template>
    <section v-if="comic">
        <h1>{{ comic.title }}</h1>
        <p>
            <router-link :to="{ path: '/xkcd/' + (comic.num - 1) }">&lt;&lt; previous</router-link>
            {{ comicDate }}
            <router-link :to="{ path: '/xkcd/' + (comic.num + 1) }">next &gt;&gt;</router-link>
        </p>
        <img :alt="comic.alt"
             :title="altText"
             :src="comic.img"/>
    </section>
</template>

<script>
    import gql from 'graphql-tag'

    export default {
        props: {
            id: {
                type: String
            }
        },

        apollo: {
            comic: {
                query: gql`
query Comic($id: Int) {
    comic(comicId: $id) {
        num
        title
        year
        month
        day
        img
        alt
        transcript
    }
}
                `,
                variables() {
                    return {
                        id: parseInt(this.id),
                    }
                }
            }
        },

        computed: {
            comicDate() {
                let date = new Date(Date.UTC(
                    this.comic.year,
                    this.comic.month - 1,
                    this.comic.day,0,0,0)
                );

                let options = {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                };

                return date.toLocaleDateString('de-DE', options)
            },
            altText() {
                return this.comic.alt
            }
        }
    }
</script>

<style scoped>
    ul {
        margin-left: 30%;
    }

    ul li {
        text-align: left;
    }
</style>
