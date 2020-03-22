const express = require('express')
require('./db/mongoose')
const classroomRouter = require('./routers/classroom')
const subjectRouter = require('./routers/subject')


const app = express()
app.use(express.json())
app.use(classroomRouter)
app.use(subjectRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('Server is up and running on port ' + PORT )
})