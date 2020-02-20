const Room = require('../models/Room')

class RoomController {
  
  async index(req, res) {
    const rooms = await Room.find()
    return res.json(rooms)
  }
  
  async store (req, res) {
    const room = await Room.create(req.body)
    return res.json(room)
  }

  async update (req, res) {
    let room = await Room.updateOne({id: req.params.id}, req.body, {
      new:true
    }, async (err, doc)=>{
      console.log(doc)
      room = await Room.find().sort({ id: req.params.id })
      return res.json(room)
    })
  }
}

module.exports = new RoomController()