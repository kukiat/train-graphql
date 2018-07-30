const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017')

const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.once('open', () => console.log('--MONGODB CONNECTED--'))

module.exports = db