const { ApolloServer } = require('apollo-server-express')
const http = require('http')
const {Server} = require('socket.io')
const cors = require('cors')
const { typeDefs } = require('./Schema/typeDefs')
const { resolvers } = require('./Schema/resolvers')
const sequelize = require('./database')

async function startApolloServer(typeDefs, resolvers) {

   const express = require('express')
    const app = express()
    app.use(cors());

    const ioServer = http.createServer(app);
    const io = new Server(ioServer, {
      cors: {
        orgin: "http://localhost:3000", 
        methods: ["GET", "POST", "PATCH", "DELETE"],
      },
    });

    io.on('connection', (socket)=>{
        console.log(`User connected ${socket.id}`)
        socket.on('join_room',(data)=>{
            socket.join(data)
            console.log(`User with ID: ${socket.id} joined room: ${data}`)
        })
        
        socket.on('disconnect', ()=>{
            console.log(`User disconnected ${socket.id}`)
        })
      })

    const port = 5001

    sequelize.sync().then(()=> console.log('db ready'))

    const server = new ApolloServer({ typeDefs, resolvers })

    await server.start()
    server.applyMiddleware({ app })

    await new Promise(resolve => app.listen(port, resolve));
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
}
startApolloServer(typeDefs,resolvers)