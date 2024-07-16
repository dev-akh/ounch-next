const { gql } = require('apollo-server-micro');

const typeDefs = gql`
  type Item {
    id: ID!
    name: String!
  }

  type PaginatedItems {
    items: [Item]!
    total: Int!
  }

  type Query {
    items(
      keywords: String
      page: Int
      pageSize: Int
    ): PaginatedItems

    item(id: ID!): Item
  }
`;

module.exports = typeDefs;
