const cors = require('cors');
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const graphqlUtils = require('./utils');
const resolvers = require('./resolvers');

const PORT = 8000;

const serverApp = express();

serverApp.use(cors());

graphqlUtils.setupGraphQLTypes().then(types => {
  const joinedTypes = types.join('');
  const typeDefs = gql(joinedTypes);

  const apolloServer = new ApolloServer({typeDefs, resolvers});

  apolloServer.applyMiddleware({ app: serverApp, path: '/graphql' });

  serverApp.listen(PORT, () => console.info(`Server started on port ${PORT}`));
})
