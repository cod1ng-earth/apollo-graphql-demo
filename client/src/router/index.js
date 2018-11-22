import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ApolloBooks from '@/components/ApolloBooks'
import ApolloBook from '@/components/ApolloBook'
import Xkcd from '@/components/Xkcd'
import DiscogsHome from '@/components/discogs/DiscogsHome'
import DiscogsArtist from '@/components/discogs/DiscogsArtist'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/books',
            name: 'books',
            component: ApolloBooks
        },
        {
            path: '/book/:isbn',
            name: 'book',
            component: ApolloBook,
            props: true
        },
        {
            path: '/xkcd',
            name: 'xkcd',
            component: Xkcd
        },
        {
            path: '/xkcd/:id',
            name: 'xkcd-comic',
            component: Xkcd,
            props: true
        },
        {
            path: '/discogs/search/artists/:name',
            name: 'discogs-search-artists',
            component: DiscogsHome,
            props: true
        },
        {
            path: '/discogs',
            name: 'discogs-home',
            component: DiscogsHome,
            props: true
        },
        {
            path: '/discogs/artist/:id',
            name: 'discogs-artist',
            component: DiscogsArtist,
            props: true
        }
    ]
})
