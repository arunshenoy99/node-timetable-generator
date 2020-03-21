const express = require('express')
const ClassRoom = require('../models/classRoom')

const router = new express.Router()

router.post('/class-room', async (req, res) => {
    const classRoom = new ClassRoom(req.body)
    try {
        await classRoom.save()
        res.status(201).send(classRoom)
    } catch (e) {
        res.status(400).send()
    }
})

module.exports = router