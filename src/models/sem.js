const mongoose = require('mongoose')

const semBranchSchema = new mongoose.Schema({
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
    }
},{
    timestamps: true
})

semBranchSchema.index({ 'field1': 1, 'field2':1 }, { unique: true })

semBranchSchema.virtuals('subjects', {
    ref: 'Subject',
    localField: '_id',
    foreignField: 'semBranch'
})

const Sem = mongoose.model('Sem', semBranchSchema)

module.exports = Sem