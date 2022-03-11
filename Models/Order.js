const {Model, DataTypes} = require('sequelize')
const sequelize = require('../database')

class Order extends Model {}

//       size: String!
//       toppings: [String!]
//       specialNotes:String
//       orderTime:String!
//       id: Int!
Order.init({
    
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    size:{
      type: DataTypes.STRING
    },
    toppings:{
        type: DataTypes.STRING,
        unique: true
    },
    specialNotes:{
        type: DataTypes.STRING,
        unique: true
    },
    orderTime:{
        type: DataTypes.STRING,
        unique: true
    },
},{
   sequelize,
   modelName: 'orders'
})

module.exports = Order