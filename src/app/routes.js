const express = require('express')

const routes = express.Router()

const RoomController = require('./controllers/RoomController')

routes.get('/server', (req, res)=>{
  res.json({ server: "ok" })
})

routes.post('/room', RoomController.store)
routes.put('/room/:id', RoomController.update)
routes.get('/room', RoomController.index)



module.exports = routes