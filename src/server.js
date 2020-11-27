const express = require('express')

const {db} = require('./db/models.js')

const app = express()

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use('/api/users',require('./routes/users').route)

app.use('/api/posts',require('./routes/posts').route)

app.use('/',express.static(__dirname + '/public'))

db.sync()
    .then(()=>{
        app.listen(2929,()=>console.log('Site is hosted on http://localhost:2929'))
    })
    .catch((err)=>{
        console.error(err)
    })
