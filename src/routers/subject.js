const express = require('express')
const Subject = require('../models/subject')
const linkClassrooms = require('../utils/linkClassrooms')

const router = new express.Router()


router.post('/subject', async (req, res) => {
    const subjectObject = req.body
    try {
        const classrooms = await linkClassrooms(subjectObject)
        if (!classrooms) {
            return res.status(404).send()
        }
        subjectObject.classrooms = classrooms
        const subject = new Subject(subjectObject)
        await subject.save()
        res.status(201).send(subject)
    } catch (e) {
        return res.status(400).send()
    } 
})

module.exports = router