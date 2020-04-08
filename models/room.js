const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let RoomSchema = new Schema({
   name: {
      type: String
   },
   up: {
      type: String
   },
   down: {
      type: String
   },
   left: {
      type: String
   },
   right: {
      type: String
   },
   items: {
      type: Array
   }
 })

//}, {
//   collection: 'game'
//})

module.exports = mongoose.model('Room', RoomSchema)
