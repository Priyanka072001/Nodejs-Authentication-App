const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://Nodejs:luCf1ylbK9K4gGsi@nodejs.sbiujxx.mongodb.net/');


const db = mongoose.connection;


db.on('error', console.error.bind(console,"Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to DB::MongoDB' );
})


module.exports = db;