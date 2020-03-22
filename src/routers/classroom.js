const express = require('express')
const Classroom = require('../models/classroom')
const Subject = require('../models/subject')
const Timetable = require('../models/timetable')
const { linkClassroom } = require('../utils/linkClassrooms')
const generateTimetable = require('../utils/generateTimetable')

const router = new express.Router()

router.post('/classroom', async (req, res) => {
    const classroom = new Classroom(req.body)
    try {
        await classroom.save()
        res.status(201).send(classroom)
    } catch (e) {
        res.status(400).send()
    }
})

router.get('/classroom', async (req, res) => {
    try {
        const classrooms = await Classroom.find({})
        if (classrooms.length === 0) {
            return res.status(404).send()
        }
        res.send(classrooms)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/classroom/:id', async (req, res) => {
    const allowedUpdates = ['sem', 'branch', 'classroom']
    const updates = Object.keys(req.body)
    const isValidUpdate = updates.every((update) => allowedUpdates.includes(update))
    if (!isValidUpdate) {
        return res.status(400).send()
    }
    try {
        const classroom = await Classroom.findById(req.params.id)
        if (!classroom) {
            return res.status(404).send()
        }
        updates.forEach((update) => {
            classroom[update] = req.body[update]
        })
        await classroom.save()
        res.send(classroom)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/classroom/:id', async (req, res) => {
    try {
        const classroom = await Classroom.findById(req.params.id)
        await classroom.remove()
        res.send()
    } catch (e) {
        res.status(400).send()
    }
})

router.get('/classroom/timetable', async (req, res) => {
    try {
        const classroom = await linkClassroom(req.query.classroom)
        if (!classroom) {
            return res.status(404).send()
        }
        await classroom.populate({
            path: 'timetable'
        }).execPopulate()
        if (classroom.timetable.length === 0) {
            const timetable = await generateTimetable(classroom)
            return res.status(201).send(timetable)
        }
        res.send(timetable)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router