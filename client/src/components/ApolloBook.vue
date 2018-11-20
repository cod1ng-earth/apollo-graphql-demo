<template>
    <section>
        <h1>{{ book.title }}</h1>
        Author: {{ book.author }}<br/>
        ISBN: {{ book.isbn }}
    </section>
</template>

<script>
    import gql from 'graphql-tag'

    export default {
        props: {
            isbn: {
                type: String,
                required: true,
            }
        },

        apollo: {
            book: {
                query: gql`
query Book($isbn: String!) {
    book(isbn: $isbn) {
        isbn
        author
        title
    }
}
                `,
                variables() {
                    return {
                        isbn: this.isbn,
                    }
                }
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
