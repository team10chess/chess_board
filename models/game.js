const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    playerId : {type: String, required:'Firstname is required'},
    color : {type: String, required:'Lastname is required'},
    points : {type: String, required:'ID is required'},
})

// mongoose.model('create', Create)
const Game=mongoose.model('Game', gameSchema);
module.exports=Game;