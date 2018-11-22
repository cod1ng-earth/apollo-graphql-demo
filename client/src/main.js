import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

Vue.config.productionTip = false

const httpLink = new HttpLink({
    // You should use an absolute URL here
    uri: 'http://localhost:4000/graphql',
})

// Create the apollo client
const apolloClient = new ApolloClient({
    link: httpLink,
    // cache: new InMemoryCache(),
    cache: new InMemoryCache({
        dataIdFromObject: o => (o._id ? `${o.__typename}:${o._id}`: null),
    }),
    connectToDevTools: true,
})

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
})

Vue.use(VueApollo)

new Vue({
    apolloProvider,
    router,
    render: h => h(App),
}).$mount('#app')
