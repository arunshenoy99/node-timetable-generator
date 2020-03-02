const mongoose = require('mongoose')

const semSchema = new mongoose.Schema({
    semBranch: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    }
},{
    timestamps: true
})

const Sem = mongoose.model('Sem', semSchema)

module.exports = Sem