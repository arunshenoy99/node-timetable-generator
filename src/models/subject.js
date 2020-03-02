const mongoose = require('mongoose')

const subjectSchema = new mongoose.Schema({
    code: {
        type: String,
        trim: true,
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
        default: 1
    },
    semBranch: {
        type: String,
        ref: 'Sem'
    }
})