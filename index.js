const dotenv = require('dotenv').config()
const express = require('express')
const cors = require('cors')
const compression = require('compression')
const mongoose = require('mongoose')
const helmet = require('helmet')
const passport = require('passport')
const userRoute = require('./routes/user')
const session = require('express-session')
require('./passport')


const app = express()
const PORT = process.env.PORT || 8000
const db_uri = process.env.DB_CONNECT;

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors({credentials: true, origin: "http://localhost:3000"}));
app.use(compression())
app.use(helmet())
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 24 * 60 * 60 * 1000 }
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(userRoute)

mongoose.connect(
  db_uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) {
      throw err
    }
  }
);

app.get('/', (req,res)=>{
  res.json('This is server')
})


app.listen(PORT, ()=> console.log('Server On'))
