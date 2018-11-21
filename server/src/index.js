import express from 'express';
import { server } from './server.js';

const app = express();

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);

let currentApp = app
if (module.hot) {
    module.hot.accept(['./server'], () => {
        app.removeListener('request', currentApp)
        app.on('request', app)
        currentApp = app
    })
}
