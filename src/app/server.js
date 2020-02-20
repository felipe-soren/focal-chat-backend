const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const databaseConfig = require('./config/database')
const cors = require('cors')

class App {
  constructor(){
    this.express = express()

    this.database()
    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.express.use(express.json())
    this.express.use(cors())
  }

  database () {
    mongoose.connect(databaseConfig.uri, 
      { useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true 
      })
  }

  routes () {
    this.express.use(routes)
  }
}

module.exports = new App().express