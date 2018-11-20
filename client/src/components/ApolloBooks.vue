<template>
    <section>
        <h1>My books</h1>
        <ul>
            <li v-for="book in books">
                <router-link :to="{ path: '/book/' + book.isbn }">
                    <strong>{{ book.title }}</strong> by {{ book.author }}
                </router-link>
            </li>
        </ul>
    </section>
</template>

<script>
    import gql from 'graphql-tag'

    export default {
        apollo: {
            books: gql`
query {
    books {
        isbn
        author
        title
    }
}
            `,
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
