const express = require('express');
const graphqlHTTP = require('express-graphql');

const schema = require('./graphql/schema');
const endpoints = require('./graphql/endpoints');

const app = express();

app.use(express.static('dist'));
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: endpoints,
}));

app.listen(8080);

console.log('Running a GraphQL API server at localhost:8080/graphql');
