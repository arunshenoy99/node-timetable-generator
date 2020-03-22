const mongoose = require('mongoose')

const timetableSchema = new mongoose.Schema({
    monday: [
        {
            subject: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Subject'
            }
        }
    ],
    tuesday: [
        {
            subject: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Subject'
            }
        }
    ],
    wednesday: [
        {
            subject: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Subject'
            }
        }
    ],
    thursday: [
        {
            subject: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Subject'
            }
        }
    ],
    friday: [
        {
            subject: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Subject'
            }
        }
    ],
    saturday: [
        {
            subject: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Subject'
            }
        }
    ],
    classroom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Classroom',
        required: true
    }
})

const Timetable = new mongoose.model('Timetable', timetableSchema)

module.exports = Timetable