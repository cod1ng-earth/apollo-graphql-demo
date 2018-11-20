import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ApolloBooks from '@/components/ApolloBooks'
import ApolloBook from '@/components/ApolloBook'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HelloWorld
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
        }
    ]
})
