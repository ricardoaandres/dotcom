const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Query {
    posts: String
  }
`);
