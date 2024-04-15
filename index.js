// require('dotenv').config();
const mongoose = require('mongoose');

const path = require('path');
require(path.join(__dirname, 'server', 'server.js'));

const DATABASE_URL = 'mongodb+srv://ChessProject:Team10%40123@cluster0.lffck.mongodb.net/?retryWrites=true&w=majority';
mongoose.set('strictQuery', false);
mongoose.connect(DATABASE_URL, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=> 
    console.log("listening"))
    .catch((err)=>console.log(err.messages))
