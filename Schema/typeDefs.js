const {gql} = require('apollo-server-express')
const typeDefs = gql`
  type Order {
      size: String!
      toppings: [String!]
      specialNotes:String
      orderTime:String!
      id: Int!
  }
  
  # queries
  type Query{
      getAllOrders: [Order]
  }

  # mutations
  type Mutation {
      submitOrder(size:String!, toppings:String!, specialNotes:String!, orderTime:String!): Order
  }

`
module.exports = {typeDefs}