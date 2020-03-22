const mongoose = require('mongoose')

const classroomSchema = new mongoose.Schema({
    sem: {
        type: Number,
        required: true,
        validate(value) {
            if (value<0) {
                throw new Error('Please enter a valid sem')
            }
        }
    },
    branch: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    classroom: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (value.length > 1) {
                throw new Error('Class must a single letter')
            }
        }
    }
},{
    timestamps: true
})

classroomSchema.index({ "sem": 1, "branch": 1, "classroom": 1 }, { unique: true })

classroomSchema.virtual('subjects', {
    ref: 'Subject',
    localField: '_id',
    foreignField: 'classroom'
})

const Classroom = mongoose.model('Classroom', classroomSchema)

module.exports = Classroom