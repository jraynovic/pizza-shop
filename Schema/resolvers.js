
const resolvers = {

  Mutation:{
      async submitOrder(parent, args){
          console.log(args)
      }
  }
}

module.exports = {resolvers}