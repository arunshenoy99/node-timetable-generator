const mongoose = require('mongoose')

const classRoomSchema = new mongoose.Schema({
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
    classRoom: {
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

classRoomSchema.index({ 'field1': 1, 'field2':1 }, { unique: true })

classRoomSchema.virtual('subjects', {
    ref: 'Subject',
    localField: '_id',
    foreignField: 'classRoom'
})

const ClassRoom = mongoose.model('ClassRoom', classRoomSchema)

module.exports = ClassRoom