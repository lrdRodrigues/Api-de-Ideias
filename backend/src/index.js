const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/ideaRoutes')

const USER = 'ideauser'
const PASSWORD = 'ideapassword'

const URI = `mongodb+srv://${USER}:${PASSWORD}@cluster0-b0doj.mongodb.net/tests?retryWrites=true&w=majority`

const app = express()
app.use(express.json())
app.use(routes)

mongoose.connect(URI, {
    useNewUrlParser: true, useUnifiedTopology: true
})

app.listen(3050, () =>{
    console.log('application running at port 3050') 
})
