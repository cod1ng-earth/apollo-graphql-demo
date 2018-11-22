import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ApolloBooks from '@/components/ApolloBooks'
import ApolloBook from '@/components/ApolloBook'
import Xkcd from '@/components/Xkcd'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/books',
            name: 'Books',
            component: ApolloBooks
        },
        {
            path: '/book/:isbn',
            name: 'Book',
            component: ApolloBook,
            props: true
        },
        {
            path: '/xkcd',
            name: 'XkcdComicOfTheDay',
            component: Xkcd
        },
        {
            path: '/xkcd/:id',
            name: 'XkcdComic',
            component: Xkcd,
            props: true
        }
    ]
})
