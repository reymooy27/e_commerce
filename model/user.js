const mongoose = require('mongoose')

const user = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  profilePicture:{
    type: String    
  }
  ,
  googleId:{
    type: String
  },
}
)

module.exports = mongoose.model('User', user)