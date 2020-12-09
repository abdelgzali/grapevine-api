const { gql } = require("apollo-server");

module.exports = gql`
  type Grape {
    name: String!
  }

  type Message {
    id: String!
    grape: String!
    content: String!
  }

  type Query {
    grapes: [Grape]
    messages: [Message!]
  }

  input CreateGrapeInput{
    name: String!
  }

  type DeletePayload{
    id: ID!
  }

  type Mutation{
    createGrape(input: CreateGrapeInput!): Grape!
    deleteGrape(id: ID): DeletePayload!
    postMessage(grape: String!, content: String!): Message!
  }
`;
