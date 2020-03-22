const Timetable = require('../models/timetable')
const Subject = require('../models/subject')

const generateTimeTable = async (classroom) => {
    await classroom.populate({
        path: 'subjects'
    }).execPopulate()
    const subNo = classroom.subjects.length
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
}

module.exports = generateTimeTable