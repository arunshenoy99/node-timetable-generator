const mongoose = require('mongoose')

const subjectSchema = new mongoose.Schema({
    code: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        uppercase: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    credit: {
        type: Number,
        default: 1
    },
    hours: {
        type: Number,
        default: 4
    },
    classrooms: [
        {
            classroom: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Classroom',
                required: true
            }
        }
    ]
})

const Subject = mongoose.model('Subject', subjectSchema)

module.exports = Subject