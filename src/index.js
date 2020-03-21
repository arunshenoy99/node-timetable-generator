const express = require('express')
require('./db/mongoose')
const classRoomRouter = require('./routers/classRoom')


const app = express()
app.use(express.json())
app.use(classRoomRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('Server is up and running on port ' + PORT )
})