const Timetable = require('../models/timetable')
const Subject = require('../models/subject')

const generateTimeTable = async (classroom) => {
    await classroom.populate({
        path: 'subjects'
    }).execPopulate()
    const timetable = new Timetable({classroom: classroom._id })
    var subjects = classroom.subjects
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    for (var i = 0; i<5 ; i++ ) {
        for (var j = 0; j<7;) {
            subjects = subjects.filter((subject) => subject.hours !== 0)
            const subNo = subjects.length
            if (subjects.length === 0) {
                return timetable
            }
            const subChoice = Math.floor(Math.random()*10 + subNo) % subNo
            console.log('subchoice:'+subChoice)
            const subject = subjects[subChoice]
            var subHours = Math.floor(Math.random() * 10) % subject.hours
            if (subHours === 0) {
                subHours = 1
            }
            console.log('subHours:'+subHours)
            subjects[subChoice].hours -= subHours
            const subHoursCopy = subHours
            for (var k = j; k<7,subHours!=0; k++) {
                timetable[days[i]][k] = { subject: subject._id }
                subHours = subHours - 1
            }
            j = j + subHoursCopy
        }
    }
}

module.exports = generateTimeTable