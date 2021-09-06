
const mongoose = require("mongoose")
require('dotenv').config()

const ConnectDb = async () => {
try {
    await mongoose.connect(process.env.DB_ADRRESSE)
  console.log('db is connected')
} catch (error) {
    console.log({msj:'db not connected',err})
}

}
module.exports = ConnectDb