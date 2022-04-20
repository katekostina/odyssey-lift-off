const { gql } = require('apollo-server');

const typeDefs = gql`
  "A track is a group of Modules that teaches about a specific topic"
  type Track {
      id: ID!
      title: String!
      author: Author!
      thumbnail: String
      length: Int
      modulesCount: Int
  }

  "Author of a complete Track or a Module"
  type Author {
      id: ID!
      name: String!
      photo: String
  }
  
  type SpaceCat {
      id: ID!
      name: String!
      age: Int
      missions: [Mission]
  }
  
  type Mission {
      id: ID!
      name: String!
      description: String!
  }
  
  type Query {
      tracksForHome: [Track!]
      spaceCats: [SpaceCat]
  }
`;

module.exports = typeDefs;
